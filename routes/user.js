class User {
    constructor(username, password) {
      this.id = Date.now(); // temporary unique ID
      this.username = username;
      this.password = password; // in real apps, use hashing
      this.bookmarks = [];
    }
  
    checkPassword(password) {
      return this.password === password;
    }
  }
  
  module.exports = User;
  