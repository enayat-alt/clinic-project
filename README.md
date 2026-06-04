# MediCare Clinic Platform

A full-stack medical clinic web app with Patient, Doctor, Admin portals and a Medical Learning Platform.

## Project Structure

```
clinic-project/
├── frontend/   → React + Vite + Tailwind + Redux
└── backend/    → Node.js + Express + MongoDB
```

## Getting Started

### Backend
```bash
cd backend
npm install
# Edit .env with your MongoDB URI, JWT secret, etc.
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on http://localhost:5173  
Backend runs on http://localhost:5000

## Tech Stack

| Layer      | Tech                              |
|------------|-----------------------------------|
| Frontend   | React, Vite, Tailwind, Redux Toolkit |
| Backend    | Node.js, Express                  |
| Database   | MongoDB + Mongoose                |
| Auth       | JWT                               |
| File Upload| Cloudinary + Multer               |
| Email      | Nodemailer                        |
| AI         | OpenAI API (configured in aiService.js) |
| Payments   | Razorpay / Stripe (configured in paymentService.js) |

## API Endpoints

| Method | Endpoint                        | Access        |
|--------|---------------------------------|---------------|
| POST   | /api/auth/register              | Public        |
| POST   | /api/auth/login                 | Public        |
| GET    | /api/auth/me                    | Private       |
| GET    | /api/doctors                    | Public        |
| GET    | /api/appointments               | Private       |
| POST   | /api/appointments               | Patient       |
| PATCH  | /api/appointments/:id/accept    | Doctor        |
| GET    | /api/admin/analytics            | Admin         |
| GET    | /api/courses                    | Public        |
| POST   | /api/courses/:id/enroll         | Private       |
