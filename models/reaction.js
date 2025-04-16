class Reaction {
    constructor(userId, postId, type) {
      this.id = Date.now();
      this.userId = userId;
      this.postId = postId;
      this.type = type; // 'like' or 'dislike'
    }
  }
  
  module.exports = Reaction;
  