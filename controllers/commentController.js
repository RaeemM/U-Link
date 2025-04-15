const { comments, Comment } = require('../models');

const addComment = (req, res) => {
  const { postId } = req.params;
  const { userId, content } = req.body;

  const comment = new Comment(userId, parseInt(postId), content);
  comments.push(comment);
  res.status(201).json(comment);
};

const getComments = (req, res) => {
  const { postId } = req.params;
  const postComments = comments.filter(c => c.postId === parseInt(postId));
  res.json(postComments);
};

module.exports = { addComment, getComments };
