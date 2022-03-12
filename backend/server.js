import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import passport from 'passport';
import './config/passport-setup.js';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import connectDB from './config/db.js';
import usersRoute from './routes/Users.js';

dotenv.config();
await connectDB();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.TOKEN_SECRET],
  })
);
app.use(cookieParser());
app.use(passport.initialize());

app.use(morgan(':method :url :status :response-time ms'));

app.use('/api/artstore/users', usersRoute);

app.get('/', (req, res) => {
  res.send('Running');
});
app.get('/1', (req, res) => {
  res.send('Running failed');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default app;
