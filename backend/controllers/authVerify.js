import jwt from 'jsonwebtoken';

module.exports = (req, res) => {
  const token = req.cookies.jwt;
  console.log(`From the file authVerify ${token}`);

  if (token) {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    res.json({ msg: 'Access Granted' });
  } else {
    res.json({ msg: 'Access Denied' });
  }
};
