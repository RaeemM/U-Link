const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.urlencoded({ extended: true }));

// Route files
const twitterRoutes = require('./routes/twitter');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const reactionRoutes = require('./routes/reaction');
const bookmarkRoutes = require('./routes/bookmark');
const categoryRoutes = require('./routes/category');
const authRoutes = require('./routes/auth');

// Route mounting
app.use('/twitter', twitterRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/reactions', reactionRoutes);
app.use('/bookmarks', bookmarkRoutes);
app.use('/categories', categoryRoutes);
app.use('/auth', authRoutes);

// Serve login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Serve main index page (after login)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
