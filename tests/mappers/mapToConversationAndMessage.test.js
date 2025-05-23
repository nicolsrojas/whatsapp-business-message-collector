const { mapToConversationAndMessage } = require('../../src/infrastructure/mappers/whatsappWebhookMapper');
const Message = require('../../src/domain/entities/Message');
const Conversation = require('../../src/domain/entities/Conversation');

describe('mapToConversationAndMessage', () => {
  it('should correctly map input into Conversation and Message entities', () => {
    const fakeTimestamp = '1720000000'; // 2024-07-03 16:53:20 UTC
    const input = {
      contact: {
        wa_id: '123456789',
        profile: { name: 'Juan Pérez' }
      },
      message: {
        id: 'msg_001',
        from: '123456789',
        type: 'text',
        timestamp: fakeTimestamp
      },
      content: 'Hola, esto es un mensaje'
    };

    const { conversation, message } = mapToConversationAndMessage(input);

    const expectedTimestamp = parseInt(fakeTimestamp) * 1000;

    // Verifica la conversación
    expect(conversation).toBeInstanceOf(Conversation);
    expect(conversation.id).toBe('123456789');
    expect(conversation.contactName).toBe('Juan Pérez');
    expect(conversation.lastMessageId).toBe('msg_001');
    expect(conversation.createdAt).toBe(expectedTimestamp);
    expect(conversation.updatedAt).toBe(expectedTimestamp);

    // Verifica el mensaje
    expect(message).toBeInstanceOf(Message);
    expect(message.id).toBe('msg_001');
    expect(message.from).toBe('123456789');
    expect(message.conversationId).toBe('123456789');
    expect(message.type).toBe('text');
    expect(message.content).toBe('Hola, esto es un mensaje');
    expect(message.createdAt).toBe(expectedTimestamp);
    expect(message.updatedAt).toBe(expectedTimestamp);
  });
});
