const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
  res.status(200).json({
    message: "Welcome to your profile",
    user: req.session.user,
  });
});

module.exports = router;
