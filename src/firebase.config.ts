import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdCfQTOb7A4vNqrFA4cZo1mPAGtVl8iwQ",
  authDomain: "disney-auth-36f3c.firebaseapp.com",
  projectId: "disney-auth-36f3c",
  storageBucket: "disney-auth-36f3c.appspot.com",
  messagingSenderId: "220894178813",
  appId: "1:220894178813:web:1409ccc607394bbbacbd94",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
