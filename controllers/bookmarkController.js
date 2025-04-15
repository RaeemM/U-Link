const { bookmarks, Bookmark } = require('../models');

const bookmarkPost = (req, res) => {
  const { postId } = req.params;
  const { userId } = req.body;

  // Avoid duplicate bookmarks
  const exists = bookmarks.find(b => b.userId === userId && b.postId === parseInt(postId));
  if (exists) {
    return res.status(400).json({ message: 'Already bookmarked' });
  }

  const bookmark = new Bookmark(userId, parseInt(postId));
  bookmarks.push(bookmark);
  res.status(201).json(bookmark);
};

const getUserBookmarks = (req, res) => {
  const { userId } = req.query;
  const userBookmarks = bookmarks.filter(b => b.userId === userId);
  res.json(userBookmarks);
};

module.exports = { bookmarkPost, getUserBookmarks };
