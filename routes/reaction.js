const express = require('express');
const router = express.Router();
const reactionController = require('../controllers/reactionController');

// Like or Dislike a post
router.post('/:postId', reactionController.reactToPost);

module.exports = router;
