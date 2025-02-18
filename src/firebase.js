import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYQ0v2OFOVvkJthzaH8W9iImxJmL-PTPg",
  authDomain: "sm-clone-5c090.firebaseapp.com",
  projectId: "sm-clone-5c090",
  storageBucket: "sm-clone-5c090.firebasestorage.app",
  messagingSenderId: "324240114060",
  appId: "1:324240114060:web:e90ea6846fce9ede5056a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
