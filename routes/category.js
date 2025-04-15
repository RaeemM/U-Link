const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// View all categories
router.get('/', categoryController.getAllCategories);

// Filter posts by category
router.get('/:categoryName', categoryController.getPostsByCategory);

module.exports = router;
