# whatsapp-business-message-collector

A Node.js service designed to collect and store WhatsApp Business Cloud API messages — both **incoming** and **outgoing** — in a Firebase Realtime Database.  
Built with scalability and clean architecture in mind, this project serves as the foundation for building tools such as custom chat UIs, analytics dashboards, or CRMs.

---

## Features

- Receives incoming messages via [Meta's WhatsApp Cloud API Webhooks](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks).
- Receives outgoing messages from a third-party system via custom webhooks.
- Stores all messages in a **Firebase Realtime Database**.
- Clean and modular architecture for long-term maintainability.
- Ready to evolve into a full chat backend (e.g. WhatsApp Web-style UI).
- Easily adaptable to other databases (e.g., Firestore, PostgreSQL, MongoDB).

---

## Folder Structure


## Tech Stack

- **Node.js** (v18+)
- **Express** for API/webhook handling
- **Firebase Admin SDK** for Realtime Database
- Clean Architecture principles
- (Optional) TypeScript for better DX (TBD)

---

## ⚙️ Setup Instructions

1. **Clone the repository**  
```bash
git clone https://github.com/your-username/whatsapp-business-message-collector.git
cd whatsapp-business-message-collector
```

2. **Install dependencies**

```bash
npm install
```

3. **Install dependencies**

```env
PORT=3000
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=...
FIREBASE_CLIENT_EMAIL=...
```

4.- **Start the server**
```bash
npm start
```

## 📩 Webhook Endpoints

| Route                  | Description                                      |
|------------------------|--------------------------------------------------|
| `POST /webhook/incoming` | Receives WhatsApp incoming messages from Meta    |
| `POST /webhook/outgoing` | Receives outgoing messages from a third-party service |



