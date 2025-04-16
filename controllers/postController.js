const { posts, Post,getUserById } = require('../models');

const getAllPosts = (req, res) => {
  const postsWithUsernames = posts.map(p => ({
    ...p,
    username: getUserById(p.userId)?.username || "Unknown"
  }));
  res.json(postsWithUsernames);
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
