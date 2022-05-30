const express = require("express");
const {
  getAllPosts,
  createPosts,
  updatepost,
} = require("../controllers/postController");

const router = express.Router();

router.route("/posts").get(getAllPosts);
router.route("/post/new").post(createPosts);
router.route("/post/:id").put(updatepost);

module.exports = router;
