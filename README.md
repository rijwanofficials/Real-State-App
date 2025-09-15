# 🏡 PropBot – Real Estate Web Application  

A responsive full-stack real estate platform built with **React.js**, **Tailwind CSS**, **Firebase Authentication**, and a **Node.js backend (in progress)**.  
It allows property listing, searching, filtering, user authentication, and more.  

🔗 **Live Demo:** [PropBot Real Estate App](https://real-state-app-xi.vercel.app/)  

---

## 📖 Summary  

PropBot aims to revolutionize real estate by providing a **seamless platform** for buyers, renters, and sellers.  
It features:  
- User-friendly and responsive UI  
- Secure authentication  
- Dynamic property data handling  

---

## ⚡ Tech Stack  

- **Frontend:** React.js, Tailwind CSS, Vite  
- **Authentication:** Firebase Authentication  
- **Backend:** Node.js, Express.js (in progress)  
- **Database:** MongoDB (in progress), Firebase (optional)  

---

## 🚀 Setup Instructions  

### ✅ Prerequisites  
- Node.js (v16 or higher recommended)  
- npm or yarn  
- Firebase account  

### 🛠 Running Locally  

1. **Clone the repository:**  
   ```bash
   git clone https:https://github.com/rijwanofficials/Real-State-App
Install dependencies: npm install

Setup environment variables:
Create a .env file in the project root and add:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

Start the development server: npm run dev

🔥 Firebase Setup

Go to the Firebase Console
 and create a new project.

In Project Settings, add a new Web App.

Copy your Firebase config keys.

Paste them in the .env file with VITE_ prefix.

Enable Authentication → Choose Email/Password or other providers.

(Optional) Enable Firestore/Realtime Database for property data storage.

✨ Features

✔️ Fully responsive UI with React + Tailwind CSS
✔️ Property listing, search & advanced filtering
✔️ Secure login/signup with Firebase Authentication
✔️ AuthContext for state management
✔️ Uses dummy REST API for frontend property data
✔️ Backend (Node.js + MongoDB) development in progress
