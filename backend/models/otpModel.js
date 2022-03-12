import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const otpSchema = new Schema(
  {
    email: {
      type: Schema.Types.String,
      required: true,
      lowercase: true,
      trim: true,
    },
    otp: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now, index: { expiresIn: '5m' } },
  },
  { timestamps: true }
);

const Otp = mongoose.model('OTP', otpSchema);

export default Otp;
