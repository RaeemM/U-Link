class Post {
    constructor(userId, content, category) {
      this.id = Date.now();
      this.userId = userId;
      this.content = content;
      this.category = category;
      this.timestamp = new Date();
      this.likes = 0;
      this.dislikes = 0;
      this.comments = [];
    }
  }
  
  module.exports = Post;
  