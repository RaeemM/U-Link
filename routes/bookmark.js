const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmarkController');

// Add a bookmark
router.post('/:postId', bookmarkController.bookmarkPost);

// View user's bookmarks
router.get('/', bookmarkController.getUserBookmarks);

module.exports = router;
