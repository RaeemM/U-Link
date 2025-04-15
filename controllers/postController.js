const { posts, Post } = require('../models');

const getAllPosts = (req, res) => {
  res.json(posts);
};

const createPost = (req, res) => {
  const { userId, content, category } = req.body;
  if (!userId || !content || !category) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const post = new Post(userId, content, category);
  posts.push(post);
  res.status(201).json(post);
};

module.exports = { getAllPosts, createPost };
