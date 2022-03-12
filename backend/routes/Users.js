import express from 'express';
import {
  signupUser,
  userLogin,
  logoutUser,
  showMyProfile,
  updateUser,
  removeMe,
  verifyOtp,
  verifyLoginOtp,
} from '../controllers/usersController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', signupUser); // register users
router.post('/register/otpCheck', verifyOtp); // register users otp check
router.post('/login', userLogin); // logging users
router.post('/login/otpCheck', verifyLoginOtp); // logging users otp check
router.post('/logout', protect, logoutUser); //logout user
router.get('/showMe', protect, showMyProfile); // Show my profile
router.put('/update', protect, updateUser); // updating myself
router.delete('/delete', protect, removeMe); // deleting myself

export default router;
