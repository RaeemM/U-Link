//Used to simulate a basic "Database"


const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const Reaction = require('./reaction');
const Bookmark = require('./bookmark');
const Category = require('./category');

// In-memory DB for now
const users = [new User('bob', 'bobpass')];
const posts = [];
const comments = [];
const reactions = [];
const bookmarks = [];
const categories = [
  new Category('News'),
  new Category('Meme'),
  new Category('Thought'),
];

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
  categories
};
