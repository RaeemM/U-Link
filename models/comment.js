class Comment {
    constructor(userId, postId, content) {
      this.id = Date.now();
      this.userId = userId;
      this.postId = postId;
      this.content = content;
      this.timestamp = new Date();
    }
  }
  
  module.exports = Comment;
  