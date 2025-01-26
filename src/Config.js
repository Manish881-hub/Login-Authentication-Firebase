import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs1iG8aGf9BHZrx_ebt0HEkww71xsw0Cc",
  authDomain: "fir-login-83188.firebaseapp.com",
  projectId: "fir-login-83188",
  storageBucket: "fir-login-83188.firebasestorage.app",
  messagingSenderId: "233793599969",
  appId: "1:233793599969:web:5f416155c89098933c3aa0",
  measurementId: "G-6ETDJVL5FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// HANDLE GOOGLE LOGIN
const handleGoogleLogin = async(setError) => {
  try {
    const result = await signInWithPopup(auth,googleProvider);
    console.log('Google Sign-In:', result.user);
    setError('');
  } catch (err) {
    console.log(err);
    setError('Google Sign-In failed');  
  }
}

//HANDLE LOGIN USING EMAIL AND PASSWORD
const handleSubmit = async(e,setError) =>{
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  
  try {
    const userCred = await signInWithEmailAndPassword(auth,email,password);
    console.log('User sigin in:', userCred.user);
    setError('');
  } catch (error) {
    console.log(err);
    setError('Invalid email or password');
  }
  e.target.rest();

}


export {auth, googleProvider,handleGoogleLogin, handleSubmit}
