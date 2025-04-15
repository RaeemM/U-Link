const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Add comment to a post
router.post('/:postId', commentController.addComment);

// View comments for a post
router.get('/:postId', commentController.getComments);

module.exports = router;
