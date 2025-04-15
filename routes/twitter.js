const express = require('express');
const router = express.Router();
const { postTweet, getRecentTweets } = require('../controllers/twitterController');

// Route to post a tweet
//router.post('/tweet', postTweet);

// Route to get recent tweets
router.get('/timeline', getRecentTweets);

module.exports = router;
