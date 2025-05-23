const ConversationRepository = require('../../domain/repositories/ConversationRepository');

class FirebaseConversationRepository extends ConversationRepository {
  constructor(db) {
    super();
    this.rootRef = db.ref('conversations');
  }
  async save(conversation) {
    await this.rootRef.child(conversation.id).set(conversation.toJSON());
    return conversation;
  }
}

module.exports = FirebaseConversationRepository;
