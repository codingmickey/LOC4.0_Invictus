import bcrypt from 'bcryptjs';
import multer from 'multer';
import path from 'path';
import otpGenerator from 'otp-generator';
import Users from '../models/Users.js';
import Otp from '../models/otpModel.js';

import {
  userSignUp,
  userUpdate,
  otpSend,
  loginOtpSend
} from '../mailing/gmail.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/Users.js';
dotenv.config();
let resetLink = 'https://google.com';

// sign Up AN User

// Getting users profile pic
const a = new Date();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/userProfile');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
      '-' +
      a.getDate() +
      import(a.getMonth() + 1) +
      '-' +
      a.getFullYear() +
      '-' +
      a.getHours() +
      '.' +
      a.getMinutes() +
      '.' +
      a.getSeconds() +
      ' ' +
      path.extname(file.originalname)
    );
  },
});

const uploadImg1 = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single('profileImage');

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  filetypes.test(path.extname(file.originalname).toLowerCase());

  const mimetype = filetypes.test(file.mimetype);

  if (filetypes && mimetype) {
    return cb(null, true);
  } else {
    return cb('Error:Images only');
  }
}

let signpuEmail;
let signupPassword;
const signupUser = async (req, res) => {
  signupPassword = req.body.password;
  signpuEmail = req.body.email;
  try {
    const userAdd = await Users.findOne({ email: signpuEmail });
    if (userAdd) {
      res.status(400).json({
        success: false,
        message: 'User already registered,Try Signing In',
      });
      return;
    }
    const OTP = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    console.log(OTP);
    const otp = new Otp({ email: signpuEmail, otp: OTP });
    console.log(otp);
    const salt = await bcrypt.genSalt(10);
    otp.otp = await bcrypt.hash(otp.otp, salt);
    const result = await otp.save();
    await otpSend({
      from: process.env.EMAIL,
      to: signpuEmail,
      subject: "Anish's Artstore",
      template: 'otp',
      templateVars: {
        emailAddress: signpuEmail,
        otp: OTP,
        resetLink: resetLink
      },
    });
    res.status(200).send({
      success: true,
      message: 'OTP sent successfully to your registered email-Id',
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const verifyOtp = async (req, res) => {
  const pass = signupPassword;
  try {
    const email = signpuEmail;
    const otp = req.body.otp;
    const otpHolder = await Otp.find({
      email: email,
    });
    if (otpHolder.length === 0) {
      res.status(400).send({
        success: false,
        message: 'You are using an expired Otp',
      });
      return;
    }
    const rightOtpfind = otpHolder[otpHolder.length - 1];
    const validUser = await bcrypt.compare(otp, rightOtpfind.otp);
    if (rightOtpfind.email == signpuEmail && validUser) {
      const user = new Users({ email: email });
      await user.save();
      await userSignUp({
        from: process.env.EMAIL,
        to: email,
        subject: "Anish's Artstore",
        template: 'signUp',
        templateVars: {
          emailAddress: email,
          name: "user",
          resetLink: resetLink
        },
      });
      const token = await user.generateAuthToken();
      const deleteOtp = await Otp.deleteMany({
        email: rightOtpfind.email,
      });
      res.status(200).send({
        success: true,
        message: 'New User created successfully',
        user,
        token,
      });
    } else {
      res.status(400).send({
        success: false,
        message: 'Plz enter the correct OTP',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

let loginEmail;
const userLogin = async (req, res) => {
  loginEmail = req.body.email;
  try {
    const user = await Users.find({ email: loginEmail })
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'User not found',
      })
    }
    const OTP = otpGenerator.generate(6, {
      digits: true,
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });
    console.log(OTP);
    const otp = new Otp({ email: loginEmail, otp: OTP });
    console.log(otp);
    const salt = await bcrypt.genSalt(10);
    otp.otp = await bcrypt.hash(otp.otp, salt);
    const result = await otp.save();
    await loginOtpSend({
      from: process.env.EMAIL,
      to: loginEmail,
      subject: "Anish's Artstore",
      template: 'login',
      templateVars: {
        otp: OTP,
      },
    });
    res.status(200).send({
      success: true,
      message: 'OTP sent successfully to your registered email-Id',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

const verifyLoginOtp = async (req, res) => {
  try {
    const otp = req.body.otp;
    const otpHolder = await Otp.find({
      email: loginEmail,
    });
    if (otpHolder.length === 0) {
      res.status(400).send({
        success: false,
        message: 'You are using an expired Otp',
      });
      return;
    }
    const rightOtpfind = otpHolder[otpHolder.length - 1];
    const validUser = await bcrypt.compare(otp, rightOtpfind.otp);
    const user = await Users.find({ email: loginEmail })
    console.log(user);
    if (rightOtpfind.email == loginEmail && validUser) {
      const token = await user[0].generateAuthToken();
      const deleteOtp = await Otp.deleteMany({
        email: rightOtpfind.email,
      });
      res.status(200).send({
        success: true,
        message: 'loggin in successfully',
        user,
        token,
      });
    } else {
      res.status(400).send({
        success: false,
        message: 'Plz enter the correct OTP',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


//logout user
const logoutUser = async (req, res) => {
  try {
    req.tokens === '';

    res.json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

// getting profile
const showMyProfile = async (req, res) => {
  try {
    const profile = await req.user;
    res.status(200).json({
      success: true,
      message: 'heres your profile',
      profile,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Updating your ID

// const updateUser = async (req, res) => {
//   try {
//     const user = Users.findById(req.user._id);
//     console.log(user);
//     const updateData = {
//       ...req.body,
//       // image: req.file.path,
//       password: req.body.password
//         ? await bcrypt.hash(req.body.password, 8)
//         : req.body.password,
//     };

//     updateData.password
//       ? await userPassword({
//           from: process.env.EMAIL,
//           to: req.body.email,
//           subject: "Anish's Artstore",
//           template: 'updateProfile',
//           templateVars: {
//             emailAddress: req.body.email,
//             name: req.body.name,
//             resetLink:resetLink         
//            },
//         })
//       : await userUpdate({
//           from: process.env.EMAIL,
//           to: req.body.email,
//           subject: "Anish's Artstore",
//           template: 'signUp',
//           templateVars: {
//             emailAddress: req.body.email,
//             name: req.body.name,
//             resetLink,
//           },
//         });
//     const found = await Users.updateOne(
//       user,
//       { $set: updateData },
//       { omitUndefined: 1 }
//     );
//     if (!found) {
//       res.status(404).json({
//         success: false,
//         message: 'User not found',
//       });
//     } else {
//       res.status(201).json({
//         success: true,
//         message: 'User updated sucessfully',
//         updateData,
//       });
//     }
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//     console.log(error);
//   }
// };

const updateUser = async (req, res) => {
  try {
    const username = req.body.username;

  } catch (error) {

  }
}
// Removing your account

const removeMe = async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.user._id);
    res.status(200).json({
      success: true,
      message: 'Successfully deleted your account',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};





export {
  signupUser,
  uploadImg1,
  userLogin,
  logoutUser,
  showMyProfile,
  updateUser,
  removeMe,
  verifyOtp,
  verifyLoginOtp
};
