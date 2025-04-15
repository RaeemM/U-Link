const axios = require('axios');

const BEARER_TOKEN = process.env.BEARER_TOKEN;

const twitterApi = axios.create({
  baseURL: 'https://api.twitter.com/2',
  headers: {
    'Authorization': `Bearer ${BEARER_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

// POST /twitter/tweet
const postTweet = async (req, res) => {
  const { text } = req.body;

  try {
    const response = await twitterApi.post('/tweets', { text });
    res.status(200).json({ message: 'Tweet posted!', data: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Error posting tweet', error: error.response.data });
  }
};

// GET /twitter/timeline
const getRecentTweets = async (req, res) => {
  try {
    const response = await twitterApi.get('/tweets/search/recent?query=from:TwitterDev&max_results=5');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tweets', error: error.response.data });
  }
};

module.exports = { postTweet, getRecentTweets };
