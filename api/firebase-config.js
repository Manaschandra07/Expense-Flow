export default function handler(req, res) {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyDVKDiOnC1Wqvbg7-vymDW5hdo5hmdZ5nI",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "finance-tracker-0710.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "finance-tracker-0710",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "finance-tracker-0710.firebasestorage.app",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "844155637274",
    appId: process.env.FIREBASE_APP_ID || "1:844155637274:web:125b220fa0ce26650c0ba3",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-ERJEFPQ4B3"
  };
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(`window.firebaseConfig = ${JSON.stringify(config)};`);
}
