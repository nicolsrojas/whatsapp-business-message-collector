const preprocessWhatsappWebhook = require('../../preprocessors/whatsappWebhookPreprocessor');
const mapToConversationAndMessage = require('../../mappers/whatsappWebhookMapper');
const saveIncomingMessage = require('../../../domain/use-cases/saveIncomingMessage');
const { messageRepository, conversationRepository } = require('../../config/dependencyInjector');
const config = require('../../config/app');

async function processWebhook(req, res) {
  try {
    const items = preprocessWhatsappWebhook(req.body);
    const {message, conversation} = mapToConversationAndMessage(items);

    await saveIncomingMessage(
        { message, conversation },
        { messageRepository, conversationRepository }
    );

    res.sendStatus(200);
  } catch (err) {
    console.error('Error procesando webhook:', err);
    res.sendStatus(500);
  }
}

function verifyWebhook(req, res) {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === config.whatsapp.verifyToken) {
    console.log('Webhook verificado correctamente');
    return res.status(200).send(challenge);
  } else {
    return res.sendStatus(403);
  }
}

module.exports = {
  verifyWebhook,
  processWebhook
};