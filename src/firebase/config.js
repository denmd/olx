import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBHOYStG31_m6iIjqSkzZaLOrSIbL9h6zc",
    authDomain: "olxclone-5c20f.firebaseapp.com",
    projectId: "olxclone-5c20f",
    storageBucket: "olxclone-5c20f.appspot.com",
    messagingSenderId: "703937597460",
    appId: "1:703937597460:web:ab296b2fa5302cbd39d701",
    measurementId: "G-NPDE66HWYR"
  };

 
  export default firebase.initializeApp(firebaseConfig);
  
