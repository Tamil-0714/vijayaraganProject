const express = require("express");
const bcrypt = require("bcrypt");
const { fetchFacultyCred } = require("../DB/db");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { uid, pass } = req.body;

    const rows = await fetchFacultyCred(uid);

    if (rows && rows[0]) {
      bcrypt.compare(pass, rows[0].pass, function (err, result) {
        if (err) {
          console.error("Error comparing passwords:", err);
          return res.status(500).json({ message: "Internal Server Error" });
        }
        if (result) {
          req.session.user = { uid };
          return res.status(200).json({ message: "Login successful" });
        } else {
          return res
            .status(403)
            .json({ message: "Unauthorized: Incorrect Password" });
        }
      });
    } else {
      return res.status(403).json({ message: "Unauthorized: User Not Found" });
    }
  } catch (error) {
    console.error("Error processing login request:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
