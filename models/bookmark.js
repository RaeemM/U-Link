class Bookmark {
    constructor(userId, postId) {
      this.id = Date.now();
      this.userId = userId;
      this.postId = postId;
    }
  }
  
  module.exports = Bookmark;
  