import passport from 'passport';

const SUCCESS_LOGIN_URL = 'http://localhost:3001/';
const SUCCESS_FAILURE_URL = 'http://localhost:3001/1';

const ologin = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

const callback = passport.authenticate('google', {
  failureMessage: 'Cannot login to google,plz login later!',
  successRedirect: SUCCESS_LOGIN_URL,
  failureRedirect: SUCCESS_FAILURE_URL,
});
(req, res) => {
  console.log('success:', req.user);
  res.send('Thanku for signing in!');
};

export { ologin, callback };
