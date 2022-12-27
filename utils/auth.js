const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
  try {
    const headerToken = req.headers["authorization"];
    if (!headerToken) {
      res.status(401).send("Access denied. No token provided.");
    }
    const bearerToken = headerToken.split(" ")[1];
    const decoded = jwt.verify(bearerToken, config.TOKEN_KEY);
    req.token = bearerToken;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send(error.message);
  }
};

module.exports = {
  verifyToken,
};
