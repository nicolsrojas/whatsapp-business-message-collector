async function saveIncomingMessage(
  { conversation, message }, 
  { conversationRepository, messageRepository }) {

  if (!conversation || !message) {
    throw new Error('Datos incompletos para guardar mensaje y conversación');
  }

  await conversationRepository.save(conversation);
  await messageRepository.save(message);

  return { conversation, message };
}

module.exports = saveIncomingMessage;
