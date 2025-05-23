const SaveIncomingMessageUseCase = require('../../src/domain/use-cases/SaveIncomingMessageUseCase');

test('should save a valid incoming message', async () => {
  const fakeRepo = {
    saveMessage: jest.fn().mockResolvedValue(true),
  };

  const useCase = new SaveIncomingMessageUseCase(fakeRepo);

  const result = await useCase.execute({
  "object": "whatsapp_business_account",
  "entry": [
    {
      "id": "547140091790182",
      "changes": [
        {
          "value": {
            "messaging_product": "whatsapp",
            "metadata": {
              "display_phone_number": "15556530644",
              "phone_number_id": "599350799936409"
            },
            "contacts": [
              {
                "profile": {
                  "name": "Nicols Rojas"
                },
                "wa_id": "51981185821"
              }
            ],
            "messages": [
              {
                "from": "51981185821",
                "id": "wamid.HBgLNTE5ODExODU4MjEVAgASGCAxRkZEMUE1NkVDOUVFQTMwMUYxNTYwNDM4MjI3Mzk5MAA=",
                "timestamp": "1747860871",
                "text": {
                  "body": "El contenido de un mensaje"
                },
                "type": "text"
              }
            ]
          },
          "field": "messages"
        }
      ]
    }
  ]
});

  expect(fakeRepo.saveMessage).toHaveBeenCalled();
});
