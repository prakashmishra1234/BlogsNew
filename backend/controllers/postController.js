const Post = require("../models/postModels");

//Create Post
exports.createPosts = async (req, res, next) => {
  const post = await Post.create(req.body);
  res.status(201).json({
    success: true,
    post,
  });
};

//Get All Posts
exports.getAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(201).json({
    success: true,
    posts,
  });
};
