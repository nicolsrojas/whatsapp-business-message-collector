function preprocessWhatsappWebhook(whatsappMessage) {
  if (!whatsappMessage.entry || whatsappMessage.entry.length === 0) {
    throw new Error('Payload inválido: falta entry');
  }

  const { value } = whatsappMessage.entry[0].changes[0];
  if (!value) {
    throw new Error('Payload inválido: falta value');
  }

  const metadata = value.metadata || {};
  const message = value.messages?.[0];
  const contact = value.contacts?.[0];

  if (!message || !contact) {
    throw new Error('Payload inválido: falta message o contact');
  }

  // Extraer contenido basado en tipo
  let content = '';
  switch (message.type) {
    case 'text':
      content = message.text?.body || '';
      break;
    case 'image':
      content = message.image || '';
      break;
    case 'audio':
      content = message.audio || '';
      break;
    case 'document':
      content = message.document || '';
      break;
    default:
      content = JSON.stringify(message);
  }

  return {
    metadata,
    contact,
    message,
    content
  };
}

module.exports = preprocessWhatsappWebhook;
