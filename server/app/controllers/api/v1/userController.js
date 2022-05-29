const userService = require("../../../services/userService");
const secret = "secret";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userRepository = require("../../../repositories/userRepository");
const { token } = require("morgan");

module.exports = {
  // registerForm(req, res) {
  //   res.render('register');
  // },

  // loginForm(req, res) {
  //   res.render('login');
  // },

  register(req, res) {
    userService
      .register(req.body)
      .then((data) => {
        res.status(201).json({
          status: "CREATED",
          data,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  login(req, res) {
    userService
      .login(req.body)
      .then((data) => {
        res.status(200).json({
          status: "OK",
          data,
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  async authorize(req, res, next) {
    try {
      const bearerToken = req.headers.authorization;
      const token = bearerToken.split(" ")[1];
      const tokenPayload = jwt.verify(token, secret);
      console.log(token);
      res.json({ jwt: token });

      req.member = await userRepository.findById(tokenPayload.id);
      next();
    } catch (error) {
      if (error) {
        res.status(401).send({
          statusbar: "Unauthorized",
          message: error.message,
          jwt: token,
        });
      }
    }
  },

  async whoAmI(req, res) {
    res.status(200).json({
      status: "OK",
      user: req.member,
    });
  },
}