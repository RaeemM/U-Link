// Force dotenv config load
require('dotenv').config();

// 🔁 TOGGLE BETWEEN LIVE & MOCK DATA
const useMock = true; // ⬅️ Change this to false if you want to re-enable live API

const mockTweets = require('../mockTweets');

const axios = require('axios');
const BEARER_TOKEN = process.env.BEARER_TOKEN;

const twitterApi = axios.create({
  baseURL: 'https://api.twitter.com/2',
  headers: {
    'Authorization': `Bearer ${BEARER_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

const getRecentTweets = async (req, res) => {
  if (useMock) {
    console.log('Using mock tweet data');
    return res.status(200).json(mockTweets);
  }

  try {
    const response = await twitterApi.get(
      '/tweets/search/recent?query=from:UWIGlobalCampus&max_results=10'
    );
    console.log('Twitter API response:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching tweets:', error.response?.data || error.message);
    res.status(500).json({ message: 'Error fetching tweets', error: error.response?.data || error.message });
  }
};

module.exports = { getRecentTweets };
