# 🚀 Sales Signal Analyzer

An AI-powered web application that analyzes sales call transcripts and identifies key customer signals such as **Buying Interest**, **Objections**, and **Confusion**. The application also provides actionable coaching tips to help sales representatives improve their conversations and close deals more effectively.

---

## 📌 Features

- Analyze sales meeting transcripts using AI
- Detect key sales signals:
  - 🔥 Buying Interest
  - ⚠️ Objection
  - ❓ Confusion
- Extract relevant quotes from the transcript
- Generate concise coaching tips
- REST API powered backend
- Modern React-based frontend
- AI integration using Groq LLM

---

## 🛠️ Tech Stack

### Frontend
- React.js 19.2.6
- React DOM 19.2.6
- Axios 1.17.0

### Backend
- Node.js v24.10.0
- Express.js

### AI Model
- Groq AI (Llama Model)

---

## 📂 Project Structure

```text
sales-signal-analyzer/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
└── .gitignore
```

---

## ⚙️ Prerequisites

Make sure the following are installed on your machine:

- Node.js v24.10.0
- npm
- Groq API Key

---

## 🔑 Environment Configuration

### Important

Before starting the backend application, create a `.env` file inside the `backend` folder and add the following configuration:

```env
GROQ_API_KEY=<YOUR_API_KEY>
```

> **Note:** Never commit your API key to GitHub.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd sales-signal-analyzer
```

---

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the backend server:

```bash
npm start
```

Backend will be available at:

```text
http://localhost:8080
```

---

### 3. Frontend Setup

Open a new terminal.

Navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

Frontend will be available at:

```text
http://localhost:3000
```

---

## 📡 API Endpoint

### Analyze Transcript

**POST** `/analyse`

### Request

```json
{
  "transcript": "Rep: Pricing is $499/seat/month..."
}
```

### Response

```json
{
  "signals": [
    {
      "type": "objection",
      "quote": "That seems steep. We pay under $200 currently.",
      "tip": "Address pricing concerns by discussing ROI."
    },
    {
      "type": "buying_interest",
      "quote": "Send me a pricing deck and I'll get back to you.",
      "tip": "Follow up with pricing details and next steps."
    }
  ]
}
```

---

## 🎯 How It Works

1. User pastes a sales transcript into the application.
2. Frontend sends the transcript to the backend.
3. Backend invokes the Groq AI model.
4. AI identifies sales signals and generates coaching tips.
5. Results are displayed in an easy-to-read card format.

---

## 📝 Sample Transcript

```text
Rep: Pricing is $499/seat/month.

Prospect: That seems steep. We pay under $200 currently.

Rep: If your team closes one extra deal per quarter, it pays for itself 10x.

Prospect: Send me a pricing deck and I'll get back to you.
```

---

## 🔒 Security Notes

- Do not commit `.env` files to GitHub.
- Keep your Groq API key private.
- Ensure `.env` is included in `.gitignore`.

