const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Getting all
router.get("/", (req, res) => {
  res.send("Hello WOrld");
});

// Getting one
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

// Create one
router.post("/", (req, res) => {});

// Edit one
router.patch("/", (req, res) => {});

// Delete one
router.delete("/", (req, res) => {});

module.exports = router;
