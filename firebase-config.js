// 1. Go to https://console.firebase.google.com -> create a project (free)
// 2. Inside the project: Build > Firestore Database > Create database (start in test mode is fine to begin)
// 3. Project settings (gear icon) > General > "Your apps" > Add app > Web (</>) icon
// 4. Copy the firebaseConfig object it gives you and paste the values below.

const firebaseConfig = {
  apiKey: "AIzaSyBCdWZyKbzRLq7sibGcUgvVk8JKA4e_Nv0",
  authDomain: "katharagama-488e0.firebaseapp.com",
  projectId: "katharagama-488e0",
  storageBucket: "katharagama-488e0.firebasestorage.app",
  messagingSenderId: "58791688160",
  appId: "1:58791688160:web:a77182e061be056bcb9d85",
  measurementId: "G-TM4RLXT4W1"
};

// Set your own admin password here (only gates the admin.html page in the browser —
// see README for the security note on this).
const ADMIN_PASSWORD = "hamesh2007";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
