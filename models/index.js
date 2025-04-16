const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Reaction = require('./Reaction');
const Bookmark = require('./Bookmark');
const Category = require('./Category');

// 🧍 Create users and keep references
const bob = new User('bob', 'bobpass');
const mikaela = new User('mikaela', 'chocolatequeen');
const din = new User('din_din', 'grippy123');

const users = [bob, mikaela, din];

// 📝 Create posts using correct user IDs
const posts = [
  new Post(mikaela.id, "Mikaela's morning thoughts 🌞", "Thought"),
  new Post(din.id, "Spotted a meme of Nickell 🤣", "Meme"),
  new Post(mikaela.id, "UWI News: New cafeteria menu dropped!", "News")
];

const comments = [];
const reactions = [];
const bookmarks = [];
const categories = [
  new Category('News'),
  new Category('Meme'),
  new Category('Thought'),
];

function getUserById(id) {
  return users.find(u => u.id === id);
}

module.exports = {
  User,
  Post,
  Comment,
  Reaction,
  Bookmark,
  Category,
  users,
  posts,
  comments,
  reactions,
  bookmarks,
  categories,
  getUserById
};
