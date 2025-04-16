const { users } = require('../models');

const login = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // You can set a cookie or return a token here. For now, just return user info
  res.status(200).json({ message: 'Login successful', user });
};

const logout = (req, res) => {
  // Logic depends on session/token, but we'll just respond
  res.status(200).json({ message: 'Logged out' });
};

module.exports = { login, logout };
