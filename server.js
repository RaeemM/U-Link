const express = require('express');
const app = express();
const path = require('path');
const twitterRoutes = require('./routes/twitter');

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/twitter', twitterRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



//Route Mounting 
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');
const reactionRoutes = require('./routes/reaction');
const bookmarkRoutes = require('./routes/bookmark');
const categoryRoutes = require('./routes/category');
const authRoutes = require('./routes/auth');

app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/reactions', reactionRoutes);
app.use('/bookmarks', bookmarkRoutes);
app.use('/categories', categoryRoutes);
app.use('/auth', authRoutes);
