const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    //1. destructure token
    const jwtToken = req.header("token");
    // if no token send 403 status
    if (!jwtToken) {
      return res.satus(403).json("Not Authorized");
    }
    //cehck if token is valid
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    // req.user has the payload
    req.user = payload.user;
  } catch (error) {
    console.log(error.message);
    return res.satus(403).json("Not Authorized");
  }
  next();
};
