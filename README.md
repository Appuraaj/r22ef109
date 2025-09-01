# URL Shortener (Frontend Submission)

## 📌 Architecture
- Built with **React** + **React Router**.
- Folder structure:
  - `components/` → Reusable UI parts (UrlForm, UrlList).
  - `pages/` → Route-level pages (Home, Redirect).
  - `services/` → Business logic and persistence.
  - `utils/` → Logging wrapper.
  - `LoggingMiddleware/` → Custom logging middleware.

## ⚙️ Data Persistence
- Uses **localStorage** to store:
  - Long URL
  - Short code
  - Expiry time (default 30 mins)

## 🔑 Routing
- `/` → Home page (form + list of short URLs).
- `/:shortCode` → Redirect page (redirects to original URL if valid).

## 📑 Logging
- Uses custom **Logging Middleware** (`LoggingMiddleware/logger.js`).
- Every action (save, redirect, error) is logged via API.

## 🎨 UI
- Built with **Vanilla CSS** (can also be extended with Material UI).
- Fully responsive (desktop + mobile views).

## ✅ Assumptions
- Default validity = 30 minutes if user doesn’t provide.
- Shortcodes must be alphanumeric.
- If duplicate custom shortcode → auto-generate a unique one.
- If log API unavailable → errors are caught silently.

## 🖼️ Screenshots
_Add screenshots here (form page, shortened links list, redirect working)._
