const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// View all posts
router.get('/', postController.getAllPosts);

// Create new post
router.post('/', postController.createPost);

module.exports = router;
