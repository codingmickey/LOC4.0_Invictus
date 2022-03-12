import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
      lowercase: true,
      trim: true,
    },

    age: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 7,
    },
    image: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    instagramUserName:{
      type:String,
  },
    instagramId:{
      type:String,
    },
    twitterUserName:{
      type:String,
    },
    twitterId:{
      type:String,
    },
    linkedinUserName:{
      type:String,
    },
    likedIndId:{
      type:String,
    }
},
  { timestamps: true }
);

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET_KEY, {
    expiresIn: '3d',
  });
  await user.save();

  return token;
};
// login using hash
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('Unable to login u');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
};

// hashing the plain text password
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
