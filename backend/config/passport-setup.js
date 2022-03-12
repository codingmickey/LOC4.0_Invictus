import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import User from '../models/Users.js';
import dotenv from 'dotenv';
dotenv.config();

const GOOGLE_CALLBACK_URL =
  'http://localhost:3001/martopia/user/login/google/redirect';
passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // CHANGE THIS
      callbackURL: GOOGLE_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user already exists in our db
      User.findOne({ email: profile.emails[0].value }).then((currentUser) => {
        if (currentUser) {
          // user already there
          console.log('User Already there!');
          done(null, currentUser);
        } else {
          // Create new user
          new User({
            name: profile.displayName,
            email: profile.emails[0].value,
          })
            .save()
            .then((newUser) => {
              console.log(`New user created: ${newUser}`);
              done(null, newUser);
            });
        }
      });
    }
  )
);
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  try {
    User.findById(id, (user) => {
      done(null, user);
    });
  } catch (err) {
    console.log(err);
    done(err, null);
  }
});
