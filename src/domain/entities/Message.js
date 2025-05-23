class Message {
  constructor({
    id,
    conversationId,
    from,
    type,
    content,
    createdAt = Date.now(),
    updatedAt = Date.now()
  }) {
    this.id = id;
    this.conversationId = conversationId;
    this.from = from;
    this.type = type;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toJSON() {
    return {
      id: this.id,
      from: this.from,
      type: this.type,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

module.exports = Message;