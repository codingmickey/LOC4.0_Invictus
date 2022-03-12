import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(
      `MongoDB Connected: ${conn.connection.host}`.bgWhite.black.bold
    );
  } catch (error) {
    console.error(`Mongo DB Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};
export default connectDB;
