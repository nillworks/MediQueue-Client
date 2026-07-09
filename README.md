# MediQueue — Tutor Booking Platform

> **A modern full-stack MERN web application that connects students with professional tutors for seamless and real-time session bookings.**

MediQueue is a simple and effective platform designed to solve the problem of scattered tutor discovery. It provides a centralized hub where students can search, filter, and book sessions with verified tutors, while tutors can manage their profiles and availability slots in real-time.

---

## Project Links

- **Live Project:** [https://mediqueue-chi.vercel.app/](https://mediqueue-chi.vercel.app/)
- **Frontend Repository:** [https://github.com/nillworks/MediQueue-Client](https://github.com/nillworks/MediQueue-Client)
- **Backend Repository:** [https://github.com/nillworks/MediQueue-Server](https://github.com/nillworks/MediQueue-Server)

---

## Preview

<p align="center">
  <img src="/preview/zenotutor.png" alt="Home Page Preview" width="45%" />
  <img src="/preview/zenotutor-2.png" alt="Dashboard Preview" width="45%" />
</p>

---

## Core Features

### For Students
- **Smart Search & Filters:** Easily find tutors using real-time search by name and date range filters.
- **Seamless Session Booking:** Book tutor sessions through an intuitive modal with auto-filled user data.
- **Booking Management:** A clear dashboard to view all booked sessions, track statuses, and cancel active bookings easily.
- **Secure Authentication:** Sign in securely using Email/Password or Google OAuth (Powered by Better Auth).
- **Dark Mode Support:** A built-in dark/light theme toggle for a comfortable user experience.

### For Tutors
- **Profile Management:** Create, edit, and update your complete tutor profile including subjects, pricing, location, and schedules.
- **Slot Management:** Automatically decrease available slots when a student books a session to prevent overbooking.
- **Tutor Dashboard:** View and manage all your created tutor profiles in one clean and responsive table.

---

## Technologies Used

### Frontend (Client-side)
- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4, HeroUI, shadcn/ui
- **Authentication:** Better Auth
- **Icons & Animations:** Lucide React, react-icons, Swiper.js, tw-animate-css
- **Theme:** next-themes (Dark/Light Mode)

### Backend (Server-side)
- **Runtime:** Node.js
- **Framework:** Express.js 5
- **Database:** MongoDB 7 (Atlas)
- **Authentication/Security:** jose-cjs (JWT Verification), CORS, dotenv

---

## Step-by-Step Guide to Run Locally

Follow these instructions to set up and run the MediQueue project on your local machine.

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v20 or higher recommended)
- [Git](https://git-scm.com/)
- A MongoDB database URL (You can get one for free on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### 1. Clone the Repositories
First, clone the frontend and backend repositories to your local machine.

```bash
# Clone the frontend repository
git clone https://github.com/nillworks/MediQueue-Client.git

# Clone the backend repository
git clone https://github.com/nillworks/MediQueue-Server.git
```

### 2. Setup the Backend (Server)
Navigate to the backend directory, install the dependencies, and set up the environment variables.

```bash
cd MediQueue-Server
npm install
```

Create a `.env` file in the root of the backend folder and add the following variables:
```env
PORT=8000
DB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
```

Start the backend server:
```bash
npm run server
```
*The server should now be running on http://localhost:8000*

### 3. Setup the Frontend (Client)
Open a new terminal window, navigate to the frontend directory, install the dependencies, and configure the environment variables.

```bash
cd MediQueue-Client
npm install
```

Start the frontend development server:
```bash
npm run dev
```
*The frontend should now be running on http://localhost:3000*

### 4. Explore the App
Open your browser and navigate to `http://localhost:3000` to see the MediQueue platform in action!

---
<p align="center">
  Built by <strong>Shipon Roy</strong>
</p>
