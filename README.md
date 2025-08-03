# InstaWallet

A simple full-stack wallet / money transfer webapp built with React(Vite) + Tailwind on the frontend and Node/Express + MongoDB on the backend.

Users can sign up, sign in, view other users, and send money.

## Features

- User signup / signin with JWT authentication
- MongoDB Atlas-powered persistent user & account data
- User listing with search/filter
- Send money to other users
- Minimal, responsive UI built with utility-first CSS (Tailwind-like classes)
- Fully decoupled frontend (Vite + React) and backend (Express)

## Tech Stack

- **Frontend:** Vite, React, React Router DOM, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas (via Mongoose)
- **Authentication:** JWT
- **HTTP Client:** Axios
- **Environment Management:** dotenv

## Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/bkandh30/instaWallet.git
cd instaWallet
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/` with:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.ibqjzrm.mongodb.net/<your-db-name>?retryWrites=true&w=majority
```

Make sure:

- You've created a user in MongoDB Atlas with that username/password.
- Your IP is whitelisted (or you’ve added `0.0.0.0/0` for dev).
- You’ve replaced `<your-db-name>` with something like `instawallet`.

Run the backend:

```bash
node index.js
npm run start
```

### 3. Frontend setup

In a new terminal:

```bash
cd frontend
npm install
npm run dev
```

This should start the Vite server (typically at `http://localhost:5173`).

### 4. Try it out

- Visit `/signup` to create an account.
- Sign in at `/signin`.
- Browse users, click **Send Money**, and initiate a transfer.

## Environment Variables

Example `.env` (backend):

```env
MONGO_URI=mongodb+srv://bhavyakandharieng:<your_password>@cluster0.ibqjzrm.mongodb.net/instawallet
```

## Authentication Flow

1. Signup endpoint issues a JWT on success.
2. Frontend stores JWT in `localStorage`.
3. Protected requests (e.g., transfer) include `Authorization: Bearer <token>` header.
4. Backend middleware validates JWT before executing sensitive logic.

## UI Notes

- Reusable components: `Button`, `InputBox`, `Heading`, `SubHeading`, `BottomWarning`.
- Routing via `react-router-dom` with paths like `/signup`, `/signin`, `/dashboard`, `/send`.

## Development Tips

- Use `nodemon` in backend for auto-reload during changes:

  ```bash
  npm install -D nodemon
  npx nodemon index.js
  ```

- Inspect JWT in browser dev tools to debug authentication.
