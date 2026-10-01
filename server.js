import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Serve dynamic Firebase client configuration from env vars
app.get('/firebase-config.js', (req, res) => {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyDVKDiOnC1Wqvbg7-vymDW5hdo5hmdZ5nI",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "finance-tracker-0710.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "finance-tracker-0710",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "finance-tracker-0710.firebasestorage.app",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "844155637274",
    appId: process.env.FIREBASE_APP_ID || "1:844155637274:web:125b220fa0ce26650c0ba3",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-ERJEFPQ4B3"
  };
  res.type('application/javascript');
  res.send(`window.firebaseConfig = ${JSON.stringify(config)};`);
});

// Serve static assets
app.use(express.static(__dirname));

// SPA fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`ExpenseFlow server running on http://${HOST}:${PORT}`);
});
