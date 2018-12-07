const express = require("express");
const router = express.Router();

// @route   GET api/posts
// @desc    Test post route
// @access  Public
router.get("/test", (req, res) => res.json({ message: "Posts Works" }));

module.exports = router;
