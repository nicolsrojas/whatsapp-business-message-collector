class Conversation {
  constructor({
    id,
    contactName,
    lastMessageId = null,
    createdAt = Date.now(),
    updatedAt = Date.now()
  }) {
    this.id = id;
    this.contactName = contactName;
    this.lastMessageId = lastMessageId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  updateLastMessage(message) {
    this.lastMessageId = message.id;
    this.updatedAt = Date.now();
  }

  toJSON() {
    return {
      id: this.id,
      contactName: this.contactName,
      lastMessageId: this.lastMessageId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

module.exports = Conversation;
