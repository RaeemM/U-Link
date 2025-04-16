const { reactions, Reaction, posts } = require('../models');

const reactToPost = (req, res) => {
  const { postId } = req.params;
  const { userId, type } = req.body; // 'like' or 'dislike'

  if (!['like', 'dislike'].includes(type)) {
    return res.status(400).json({ message: 'Invalid reaction type' });
  }

  // Check if user already reacted
  const existing = reactions.find(r => r.userId === userId && r.postId === parseInt(postId));
  if (existing) {
    return res.status(400).json({ message: 'User already reacted' });
  }

  const reaction = new Reaction(userId, parseInt(postId), type);
  reactions.push(reaction);

  // Update post's like/dislike count
  const post = posts.find(p => p.id === parseInt(postId));
  if (post) {
    type === 'like' ? post.likes++ : post.dislikes++;
  }

  res.status(201).json({ message: 'Reaction recorded', reaction });
};

module.exports = { reactToPost };
