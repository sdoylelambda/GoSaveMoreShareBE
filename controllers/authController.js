const express = require("express");
const router = express.Router();
const adminModel = require("../models/adminModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// login
router.post("/login", async (req, res) => {
  try {
    let { username, password } = req.body;

    let user = await adminModel.findByUsername(username);
    if (user.length === 0) {
      return res.status(404).json({ message: "Username not found!" });
    }

    user = user[0];
    let passwordVerified = await bcrypt.compare(password, user.password);

    // CHECK user if exist and authenticate if the password matches with the database
    if (user && passwordVerified) {
      const token = generateToken({ user });

      res.status(200).json({
        message: `Welcome to Go Save More! ${user.username}`,
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isAdmin: user.isAdmin,
        token,
      });
    }
  } catch (err) {
    console.log("ERROR: ", err);
  }
});

// Function on generating token
function generateToken(user) {
  const payload = {
    username: user.username,
  };

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, "secret", options); // .env
}

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let data = {
      ...req.body,
      password: hashedPassword,
    };
    console.log("data", data);
    adminModel
      .addUser(data)
      .then((user) => {
        console.log(user);
        res.status(200).json(user);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log("ERROR: ", err);
  }
});

module.exports = router;
