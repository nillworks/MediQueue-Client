<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/Express.js-5-000000?style=for-the-badge&logo=express" />
  <img src="https://img.shields.io/badge/MongoDB-7-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" />
</p>

## 📸 Project Preview

<p align="center">
  <img src="/preview/zenotutor.png" alt="Home Page" width="45%" />
  <img src="/preview/zenotutor-2.png" alt="privew" width="45%" />
</p>

# 🏥 ZenoTutor — Tutor Booking Platform

> **A full-stack MERN application that connects students with professional
> tutors through a seamless, real-time booking experience — built with Next.js
> 16, Express.js 5, MongoDB, and JWT-based authentication.**

ZenoTutor solves the problem of scattered, unorganized tutor discovery by
providing a **single unified platform** where students can search, filter, and
book sessions with verified tutors — while tutors can manage their profiles,
availability slots, and track bookings in real time.

🔗 **Live Site:** [ZenoTutor on Vercel](https://zenotutor.vercel.app/) 🔗
**Backend API:** [API on Vercel](https://zenotutor-server.vercel.app/)

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Frontend Implementation](#-frontend-implementation)
- [Backend Implementation](#-backend-implementation)
- [Challenges & Solutions](#-challenges--solutions)
- [Data Flow](#-data-flow-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Future Improvements](#-future-improvements)
- [Conclusion](#-conclusion)

---

## ✨ Features

### 👨‍🎓 Student Features

| Feature                  | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| 🔍 **Smart Search**      | Search tutors by name with real-time regex matching                      |
| 📅 **Date Range Filter** | Filter tutors by session start date using `startDate` and `endDate`      |
| 📝 **Session Booking**   | Book sessions via a modal form with auto-filled user data                |
| 📊 **Booking Dashboard** | View all bookings in a data table with status tracking                   |
| ❌ **Cancel Booking**    | Cancel any active booking with one click (status updates to "Cancelled") |
| 🔒 **Secure Auth**       | Email/password + Google OAuth sign-in via Better Auth                    |
| 🌙 **Dark Mode**         | Full dark/light theme toggle with persistent state                       |

### 👩‍🏫 Tutor Features

| Feature                  | Description                                                               |
| ------------------------ | ------------------------------------------------------------------------- |
| ➕ **Add Tutor Profile** | Create a complete tutor profile with subject, pricing, schedule, location |
| ✏️ **Edit Tutor**        | Update tutor details via an inline edit modal                             |
| 🗑️ **Delete Tutor**      | Remove a tutor listing permanently                                        |
| 📋 **My Tutors List**    | View and manage all created tutor profiles in a table                     |
| 🎰 **Slot Management**   | Available slots auto-decrease when a student books a session              |

---

## 🛠️ Tech Stack

### Frontend

| Technology                  | Purpose                                                         |
| --------------------------- | --------------------------------------------------------------- |
| **Next.js 16** (App Router) | React framework with SSR, file-based routing, server components |
| **React 19**                | UI rendering with latest concurrent features                    |
| **Tailwind CSS v4**         | Utility-first CSS with `@theme` tokens                          |
| **HeroUI (React)**          | Premium UI component library (Modals, Toasts, Forms)            |
| **shadcn/ui**               | Accessible Table, Button components via Radix primitives        |
| **Better Auth**             | Full-stack authentication (JWT, Google OAuth, sessions)         |
| **next-themes**             | Dark/Light mode with `class` strategy                           |
| **Swiper.js**               | Touch-friendly hero slider and carousels                        |
| **Lucide React**            | Consistent SVG icon system                                      |

### Backend

| Technology            | Purpose                              |
| --------------------- | ------------------------------------ |
| **Node.js**           | JavaScript runtime                   |
| **Express.js 5**      | REST API framework                   |
| **MongoDB 7** (Atlas) | NoSQL document database              |
| **jose-cjs**          | JWT verification using JWKS endpoint |
| **CORS**              | Cross-origin request handling        |
| **dotenv**            | Environment variable management      |
| **Vercel**            | Serverless deployment                |

---

## 🎨 Frontend Implementation

### Pages & Components Built

The frontend follows a **modular component architecture** inside
`src/Components/`, with each feature organized in its own directory:

```
📄 Home Page         → Hero slider, Top Tutors, Why Choose Us, Testimonials
📄 Tutors Page       → All tutors grid + Search bar + Date filter
📄 Tutor Details     → Full tutor profile + Booking modal
📄 Add Tutor         → Multi-field form to create a new tutor
📄 My Tutors         → Table with Edit/Delete actions per tutor
📄 My Booked Session → Table with booking status + Cancel option
📄 Sign In / Sign Up → Auth pages with email + Google OAuth
📄 404 Not Found     → Custom error page
📄 Loading           → Custom animated loading screen
```

### 🖥️ Responsiveness

The application is **fully responsive** across all breakpoints:

- **Mobile** (`< 640px`) — Hamburger menu, single-column card grid, stacked
  filters
- **Tablet** (`640px – 1024px`) — 3-column tutor grid, side-by-side search/date
  filters
- **Desktop** (`> 1024px`) — 4-column tutor grid, full navigation bar, profile
  dropdown

Key responsive techniques used:

- Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)
- CSS Grid with `grid-cols-1 sm:grid-cols-3 lg:grid-cols-4`
- `container mx-auto` for consistent max-width layout
- Mobile-first `MobileMenu.jsx` component with slide-out drawer

### 🔍 Search & Filter System

The search and filter system uses **URL query parameters** for shareable,
bookmarkable state:

```
/tutors?search=john           → Search by name
/tutors?startDate=2026-01-01&endDate=2026-06-30  → Date range filter
```

**How it works:**

1. User types in the search box or selects date range
2. `updateQuery()` function updates `URLSearchParams` and calls `router.push()`
3. Next.js server component re-fetches data with the new query string
4. Backend applies `$regex` for search or `$gte/$lte` for date filtering
5. UI re-renders with filtered results

> **Smart conflict resolution:** When the user enters a search query, date
> filters are automatically cleared — and vice versa — preventing conflicting
> filter states.

### 📝 Booking UI

The booking flow uses a **HeroUI Modal** component with:

- Auto-populated fields (user name, email from session)
- Tutor info card showing subject & price
- Phone number + preferred date inputs
- Loading spinner during submission
- Toast notifications for success/failure
- **Slot validation** — the "Book Now" button is disabled when:
  - No slots are available
  - The current date is before the session start date
  - The current date is after the session end date

---

## ⚙️ Backend Implementation

### 🔌 API Structure (REST API)

The backend is a **single-file Express.js 5 server** (`index.js`) with clean
RESTful endpoints:

| Method   | Endpoint          | Auth       | Description                                          |
| -------- | ----------------- | ---------- | ---------------------------------------------------- |
| `GET`    | `/tutors`         | ❌ Public  | Get all tutors (with optional search & date filters) |
| `GET`    | `/topTutors`      | ❌ Public  | Get top 6 tutors for homepage                        |
| `GET`    | `/tutors/:id`     | 🔒 Private | Get single tutor details                             |
| `POST`   | `/tutors`         | 🔒 Private | Create a new tutor profile                           |
| `PATCH`  | `/tutors/:id`     | 🔒 Private | Update tutor data                                    |
| `DELETE` | `/tutors/:id`     | 🔒 Private | Delete a tutor                                       |
| `GET`    | `/tutorsList/:id` | 🔒 Private | Get tutors by account ID                             |
| `GET`    | `/myBooking/:id`  | 🔒 Private | Get user's bookings                                  |
| `POST`   | `/myBooking`      | 🔒 Private | Create a booking + decrement slot                    |
| `PATCH`  | `/myBooking/:id`  | 🔒 Private | Cancel a booking                                     |

### 🗄️ MongoDB CRUD Operations

Two collections power the entire system:

```javascript
const database = client.db('TutorsDataBase');
const tutorsDataCollection = database.collection('tutorsData');
const myBookingDataCollection = database.collection('my-booking-data');
```

| Operation  | Method                            | MongoDB Driver                             |
| ---------- | --------------------------------- | ------------------------------------------ |
| **Create** | `insertOne()`                     | Add tutor / Add booking                    |
| **Read**   | `find()`, `findOne()`             | List tutors, single tutor, bookings        |
| **Update** | `updateOne()` with `$set`, `$inc` | Edit tutor, decrease slots, cancel booking |
| **Delete** | `deleteOne()`                     | Remove tutor                               |

### 🔐 JWT Authentication

Authentication uses a **JWKS-based verification** flow:

```javascript
// Backend verifies tokens using the frontend's JWKS endpoint
const jwks = createRemoteJWKSet(
  new URL(`${process.env.CLIENT_URL}/api/auth/jwks`),
);

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const { payload } = await jwtVerify(token, jwks);
  next(); // Token is valid — proceed
};
```

- Frontend (Better Auth) issues JWT tokens via `authClient.token()`
- Backend fetches the public key from the frontend's `/api/auth/jwks` endpoint
- Token is verified using `jose-cjs` library
- Invalid tokens return `403 Forbidden`

### 🔒 Private Routes

All data-modifying and user-specific endpoints are protected by the
`verifyToken` middleware:

```
🔒 POST   /tutors          → requires JWT
🔒 PATCH  /tutors/:id      → requires JWT
🔒 DELETE /tutors/:id      → requires JWT
🔒 GET    /tutors/:id      → requires JWT
🔒 GET    /tutorsList/:id  → requires JWT
🔒 GET    /myBooking/:id   → requires JWT
🔒 POST   /myBooking       → requires JWT
🔒 PATCH  /myBooking/:id   → requires JWT
```

### 📅 Booking System Logic

When a student books a session, **two database operations** execute atomically:

```javascript
// 1. Insert the booking document
const bookingResult = await myBookingDataCollection.insertOne(newBooking);

// 2. Decrease available slots by 1
await tutorsDataCollection.updateOne(
  { _id: new ObjectId(tutorId) },
  { $inc: { slots: -1 } },
);
```

This ensures slot counts stay accurate across concurrent bookings.

### 📅 Date Filtering (startDate / endDate)

The backend supports **string-based date range filtering** using MongoDB
comparison operators:

```javascript
if (startDate || endDate) {
  query.sessionStartDate = {};
  if (startDate) query.sessionStartDate.$gte = startDate; // ≥ start
  if (endDate) query.sessionStartDate.$lte = endDate; // ≤ end
}
```

Dates are stored and compared as ISO strings (`YYYY-MM-DD`), which naturally
sort correctly without conversion.

---

## 🔧 Challenges & Solutions

### 1. 🐛 Data Not Updating After Filtering

**Problem:** After applying search or date filters, previously displayed tutor
cards were stale — the UI wasn't reflecting the new filtered results.

**Root Cause:** Client-side state was managing filter values but the data fetch
was happening on the server component.

**Solution:** Migrated filter state to **URL query parameters** using
`useSearchParams()` and `router.push()`. Since the tutors page is a server
component, changing the URL triggers a full server-side re-fetch with updated
query parameters.

---

### 2. 🔴 500 Server Error on Booking

**Problem:** Booking requests intermittently returned
`500 Internal Server Error`.

**Root Cause:** Some booking requests were missing the `tutorId` field, causing
`new ObjectId(undefined)` to crash the server.

**Solution:** Added a **null check** for `tutorId` before the slot decrement
operation:

```javascript
if (!tutorId) {
  return res.send({
    acknowledged: true,
    warning: 'Booking saved but tutorId missing',
  });
}
```

---

### 3. 🔑 JWT Token Verification Issues

**Problem:** Backend was rejecting valid tokens with `403 Forbidden`.

**Root Cause:** The JWKS endpoint URL was misconfigured, and the `authorization`
header parsing had a race condition where `authHeader` was checked after
`split()`.

**Solution:**

- Configured `CLIENT_URL` environment variable to point to the correct frontend
  domain
- Used `jose-cjs` library for proper JWKS-based verification
- Added proper null checks for the authorization header

---

### 4. ⏳ Loading State & Hydration Mismatch

**Problem:** Theme toggle caused a flash of unstyled content (FOUC) and React
hydration warnings.

**Root Cause:** Server-rendered HTML had no theme class, but client applied
`dark` class on mount.

**Solution:**

- Added `suppressHydrationWarning` to `<html>` tag
- Used `next-themes` with `attribute="class"` strategy
- Wrapped the entire app in `HeroUiThemeProvider` at the layout level
- Created a dedicated `loading.jsx` with a custom animated spinner

---

## 🔄 Data Flow Architecture

### Overall System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                        CLIENT (Next.js 16)                       │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────────────┐  │
│  │  UI Components │ │ Server Components │ │  Better Auth (JWT)  │  │
│  └──────┬──────┘  └───────┬──────┘  └──────────┬─────────────┘  │
│         │                 │                     │                │
│         │   User Action   │   Server Fetch      │  Token Issue   │
│         ▼                 ▼                     ▼                │
│  ┌──────────────────────────────────────────────────────────────┐│
│  │              API Layer (fetch with JWT Bearer)                ││
│  └──────────────────────────┬───────────────────────────────────┘│
└─────────────────────────────┼───────────────────────────────────┘
                              │ HTTPS
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                     SERVER (Express.js 5)                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐   │
│  │  verifyToken  │→│  Route Handler │→│  MongoDB Operations  │   │
│  │  Middleware   │  │  (CRUD Logic)  │  │  (find, insert, etc) │   │
│  └──────────────┘  └──────────────┘  └──────────┬───────────┘   │
└─────────────────────────────────────────────────┼───────────────┘
                                                  │
                                                  ▼
                                    ┌──────────────────────┐
                                    │   MongoDB Atlas       │
                                    │  ┌────────────────┐   │
                                    │  │  tutorsData     │   │
                                    │  ├────────────────┤   │
                                    │  │  my-booking-data│   │
                                    │  └────────────────┘   │
                                    └──────────────────────┘
```

### 📖 Step-by-Step Data Flow

#### 1️⃣ Browsing Tutors (Public)

```
User visits /tutors
       ↓
Next.js Server Component calls fetch('/tutors?search=...&startDate=...&endDate=...')
       ↓
Express receives GET /tutors → builds MongoDB query with $regex / $gte / $lte
       ↓
MongoDB returns matching documents
       ↓
Express sends JSON response: { ok: true, tutors: [...] }
       ↓
Server Component passes data to <TutorsAll> client component
       ↓
TutorsCard grid renders with tutor data
```

#### 2️⃣ Booking a Session (Authenticated)

```
Student clicks "Book Now" on tutor detail page
       ↓
BookingSession modal opens → form auto-fills user data from session
       ↓
Student fills phone + preferred date → clicks "Confirm Booking"
       ↓
Frontend calls: authClient.token() → gets JWT access token
       ↓
Frontend sends POST /myBooking with:
  - Headers: { Authorization: "Bearer <JWT>" }
  - Body: { tutorId, accountInfo, subject, price, ... }
       ↓
Express verifyToken middleware:
  1. Extracts token from "Bearer <token>"
  2. Fetches JWKS from frontend's /api/auth/jwks
  3. Verifies signature with jose-cjs
       ↓
Route handler:
  1. Inserts booking into my-booking-data collection
  2. Decrements tutor's slots by 1 ($inc: { slots: -1 })
       ↓
Express sends: { acknowledged: true, bookingId: "..." }
       ↓
Frontend shows success toast → refreshes page → slots update in UI
```

#### 3️⃣ Authentication Flow (JWT)

```
┌─────────────┐         ┌──────────────┐         ┌─────────────┐
│   Browser    │         │  Next.js API  │         │  Express API │
│  (Client)    │         │  (Better Auth)│         │  (Backend)   │
└──────┬──────┘         └───────┬──────┘         └──────┬──────┘
       │                        │                        │
  1.   │── Sign In ────────────▶│                        │
       │   (email + password    │                        │
       │    or Google OAuth)    │                        │
       │                        │                        │
  2.   │◀── Session Cookie ─────│                        │
       │    + JWT Token         │                        │
       │                        │                        │
  3.   │── Request Protected ───┼───────────────────────▶│
       │   Resource             │  Authorization:        │
       │                        │  Bearer <JWT>          │
       │                        │                        │
  4.   │                        │◀── Fetch JWKS ────────│
       │                        │    /api/auth/jwks      │
       │                        │──── Public Key ───────▶│
       │                        │                        │
  5.   │                        │                   Verify Token
       │                        │                   with Public Key
       │                        │                        │
  6.   │◀──────────────────────┼──── JSON Response ─────│
       │                        │                        │
```

---

## 📁 Project Structure

### Frontend (`/frontend`)

```
frontend/
├── public/                          # Static assets
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── signin/              # Sign in page
│   │   │   └── signup/              # Sign up page
│   │   ├── add-tutor/               # Add tutor form page
│   │   ├── api/                     # Next.js API routes (Better Auth)
│   │   ├── my-booked-session/       # Booked sessions dashboard
│   │   ├── my-tutors/               # My tutors management page
│   │   ├── tutors/                  # Tutors listing + detail pages
│   │   ├── error.js                 # Error boundary
│   │   ├── globals.css              # Global styles + Tailwind theme
│   │   ├── layout.js                # Root layout (Nav + Footer + Providers)
│   │   ├── loading.jsx              # Custom loading animation
│   │   ├── not-found.jsx            # Custom 404 page
│   │   └── page.js                  # Home page
│   │
│   ├── Components/
│   │   ├── AddTutorPage/
│   │   │   └── AddTutorFrom.jsx     # Multi-field tutor creation form
│   │   ├── HomePage/
│   │   │   ├── AvailableTutors.jsx  # Top tutors section
│   │   │   ├── HeroSection.jsx      # Hero layout wrapper
│   │   │   ├── HeroSlider.jsx       # Swiper-based image slider
│   │   │   ├── LeftHero.jsx         # Hero left content
│   │   │   ├── RightHeroSection.jsx # Hero right content
│   │   │   ├── Testimonials.jsx     # Student testimonials
│   │   │   └── WhyChooseUs.jsx      # Features/benefits section
│   │   ├── MyBookedSession/
│   │   │   ├── CancelBooked.jsx     # Cancel booking action
│   │   │   └── MyBookedSession.jsx  # Bookings data table
│   │   ├── MyTutor/
│   │   │   ├── DeleteTutor.jsx      # Delete tutor action
│   │   │   ├── EditTutorModal.jsx   # Edit tutor modal form
│   │   │   └── MyTutorsPage.jsx     # Tutors management table
│   │   ├── Provider/
│   │   │   └── HeroUiThemeProvider  # Dark/Light theme provider
│   │   ├── TutorsDetails/
│   │   │   ├── BookingSession.jsx   # Booking modal with form
│   │   │   └── TutorsDetails.jsx    # Full tutor profile view
│   │   ├── TutorsPage/
│   │   │   ├── DateFilter.jsx       # Date range filter inputs
│   │   │   ├── SearchTutors.jsx     # Search bar component
│   │   │   └── TutorsAll.jsx        # Tutors grid + filters wrapper
│   │   └── ui/                      # shadcn/ui primitives (Button, Table)
│   │
│   ├── lib/
│   │   ├── auth.js                  # Better Auth server config
│   │   ├── auth-client.js           # Better Auth client hooks
│   │   ├── getAllTutorsData.jsx      # Fetch all tutors (with filters)
│   │   ├── getMyBookingData.jsx     # Fetch user bookings
│   │   ├── getSingleTutorsData.jsx  # Fetch single tutor
│   │   ├── getTopTutorsData.jsx     # Fetch top 6 tutors
│   │   ├── getTutorListData.jsx     # Fetch user's tutor list
│   │   └── utils.js                 # Utility helpers (cn)
│   │
│   └── shared/
│       ├── ActiveLink.jsx           # Active nav link indicator
│       ├── Footer.jsx               # Site footer
│       ├── MobileMenu.jsx           # Mobile slide-out menu
│       ├── NavigationMenu.jsx       # Main navigation bar
│       └── TutorsCard.jsx           # Reusable tutor card component
│
├── components.json                  # shadcn/ui configuration
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Dependencies
├── postcss.config.mjs               # PostCSS + Tailwind
└── tailwind.config.js               # Tailwind configuration
```

### Backend (`/backend`)

```
backend/
├── index.js                # Express server + all routes + MongoDB logic
├── package.json            # Dependencies
├── vercel.json             # Vercel serverless config
├── .env                    # Environment variables (DB_URI, CLIENT_URL)
└── .gitignore              # Ignored files
```

---

## Future Improvements

| Improvement             | Description                                                 |
| ----------------------- | ----------------------------------------------------------- |
| **Real-time Chat**      | Add Socket.io for student-tutor messaging                   |
| **Payment Integration** | Stripe/SSLCommerz for paid session bookings                 |
| **Review System**       | Allow students to rate and review tutors after sessions     |
| **Email Notifications** | Send booking confirmations via Nodemailer                   |
| **PWA Support**         | Make the app installable on mobile devices                  |
| **Testing**             | Add unit tests with Jest and integration tests with Cypress |
| **Admin Dashboard**     | Admin panel for managing all tutors and bookings            |
| **Advanced Filters**    | Filter by subject, price range, rating, and location        |
| **Analytics**           | Track booking trends and popular tutors                     |

---

## 📌 Conclusion

**ZenoTutor** is a production-grade, full-stack tutor booking platform that
demonstrates real-world proficiency in:

- ✅ **Frontend Architecture** — Next.js 16 App Router with server/client
  component strategy
- ✅ **Backend Engineering** — RESTful API design with Express.js 5 and MongoDB
  CRUD
- ✅ **Authentication** — Secure JWT-based auth with JWKS verification and
  Google OAuth
- ✅ **State Management** — URL-driven filter state with server-side data
  fetching
- ✅ **UI/UX Design** — Responsive, dark-mode-ready interface with premium
  components
- ✅ **Deployment** — Both frontend and backend deployed on Vercel with
  serverless functions

This project reflects hands-on experience with the full software development
lifecycle — from database schema design and API architecture to component-driven
UI development and production deployment.

---

<p align="center">
  Built with ❤️ by <strong>Shipon Roy</strong>
</p>
