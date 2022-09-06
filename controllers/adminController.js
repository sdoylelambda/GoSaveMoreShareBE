const express = require("express");

const AdminModel = require("../models/adminModel");

const router = express.Router();

// Get All Users
router.get("/", (req, res) => {
  AdminModel.getUsers()
    .then((users) => res.status(200).json({ users }))
    .catch((err) => res.status(500).json({ err: err.message }));
});

// find user
router.get("/:id", (req, res) => {
  let { id } = req.params;
  AdminModel.findUser(id)
    .then((profile) => res.status(200).json({ profile }))
    .catch((err) => res.status(400).json({ err: err.message }));
});

module.exports = router;
