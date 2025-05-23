// src/infrastructure/config/dependencyInjector.js
const { db } = require('./firebase');
const FirebaseMessageRepository = require('../repositories/FirebaseMessageRepository');
const FirebaseConversationRepository = require('../repositories/FirebaseConversationRepository');

const messageRepository = new FirebaseMessageRepository(db);
const conversationRepository = new FirebaseConversationRepository(db);

module.exports = {
  messageRepository,
  conversationRepository
};
