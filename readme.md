# AI DocMate

AI DocMate is an AI-powered document assistant that will help users upload PDF documents and ask questions about their content. The goal is to provide relevant answers grounded in the uploaded documents, with citations to the source.

## Planned Features

- Upload and manage PDF documents
- Ask questions about uploaded documents
- Generate AI-powered answers based on document content
- Display source references for answers
- User authentication and document management

## Tech Stack

**Frontend**
- React
- Vite
- JavaScript

**Backend**
- Node.js
- Express.js
- REST APIs

**Database**
- MongoDB Atlas
- Mongoose

**Planned AI Features**
- LLM API integration
- PDF text extraction
- Embeddings and retrieval-augmented generation (RAG)

## Project Structure

```text
ai-docmate/
├── frontend/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── notFound.js
│   ├── routes/
│   │   └── healthRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── app.js
│   ├── server.js
│   └── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd ai-docmate
```

### 2. Start the backend

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_ATLAS_CONNECTION_STRING
```

Start the backend:

```bash
npm run dev
```

Use `node server.js` if you haven't configured a development script yet.

### 3. Start the frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed by Vite, usually `http://localhost:5173`.

## API Health Check

**Endpoint:** `GET /api/health`

Local URL:

```text
http://localhost:5000/api/health
```

Expected response:

```json
{
  "success": true,
  "message": "AI DocMate backend is running"
}
```

## Project Status

The initial frontend and backend setup is complete, and MongoDB Atlas connection has been configured. PDF processing, authentication, document storage, and AI question answering are planned next.

## Security

- Never commit `.env` files or database credentials.
- Keep API keys and other secrets out of frontend code.
- Validate and securely process uploaded files.

## License

This project is currently being developed for learning and portfolio purposes.
