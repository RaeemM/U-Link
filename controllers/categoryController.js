const { categories, posts } = require('../models');

const getAllCategories = (req, res) => {
  res.json(categories);
};

const getPostsByCategory = (req, res) => {
  const { categoryName } = req.params;
  const filtered = posts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
  res.json(filtered);
};

module.exports = { getAllCategories, getPostsByCategory };
