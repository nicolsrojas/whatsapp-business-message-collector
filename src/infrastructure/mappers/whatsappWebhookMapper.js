const Message = require('../../domain/entities/Message');
const Conversation = require('../../domain/entities/Conversation');

function mapToConversationAndMessage({ contact, message, content }) {
  const timestamp = parseInt(message.timestamp) * 1000;

  const conversationEntity = new Conversation({
    id: contact.wa_id,
    contactName: contact.profile?.name || 'Desconocido',
    lastMessageId: message.id,
    createdAt: timestamp,
    updatedAt: timestamp
  });

  const messageEntity = new Message({
    id: message.id,
    from: message.from,
    conversationId: contact.wa_id,
    type: message.type,
    content,
    createdAt: timestamp,
    updatedAt: timestamp
  });

  return {
    conversation: conversationEntity,
    message: messageEntity
  };
}

module.exports = mapToConversationAndMessage;
