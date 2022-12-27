const models = require("../../database/models");
const { verifyToken } = require("../../utils/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = process.env;

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await models.User.findOne({
      where: { email: email },
    });
    if (userFound) {
      res.status(400).send("User already exists");
    } else {
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await models.User.create({
        ...req.body,
        email: email.toLowerCase(),
        password: passwordHash,
      });
      const token = jwt.sign(
        { user_id: user.id, email: user.email },
        config.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      res.status(201).json({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          lastName: user.lastName,
        },
        token,
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const userFound = await models.User.findOne({
      where: { email: email },
    });
    if (userFound) {
      const passwordMatch = await bcrypt.compare(password, userFound.password);
      if (passwordMatch) {
        const token = jwt.sign(
          { user_id: userFound.id, email: userFound.email },
          config.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
        res.status(200).json({
          message: "Login successful",
          user: {
            id: userFound.id,
            email: userFound.email,
            name: userFound.name,
            lastName: userFound.lastName,
          },
          token,
        });
      } else {
        res.status(400).send("Invalid password");
      }
    } else {
      res.status(400).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  register,
  login,
};
