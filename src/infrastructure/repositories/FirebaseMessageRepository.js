const MessageRepository = require('../../domain/repositories/MessageRepository');
const { createSafeFirebaseId } = require('../utils/idGenerator');

class FirebaseMessageRepository extends MessageRepository {
  constructor(db) {
    super();
    this.rootRef = db.ref('messages');
  }

  async save(message) {
    await this.rootRef
      .child(message.conversationId)
      .child(createSafeFirebaseId(message.id))
      .set(message.toJSON());
    return message;
  }
}

module.exports = FirebaseMessageRepository;