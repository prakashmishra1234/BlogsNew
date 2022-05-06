const express = require("express");
const { getAllPosts, createPosts } = require("../controllers/postController");

const router = express.Router();

router.route("/posts").get(getAllPosts);
router.route("/post/new").post(createPosts);

module.exports = router;
