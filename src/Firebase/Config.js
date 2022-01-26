import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZM5dRKP2VFLIrC6dudvp_7N-CRHi8GCM",
    authDomain: "fir-e5d0e.firebaseapp.com",
    projectId: "fir-e5d0e",
    storageBucket: "fir-e5d0e.appspot.com",
    messagingSenderId: "262901546497",
    appId: "1:262901546497:web:0424c3e5d2794563958a00",
    measurementId: "G-978MT469NR"
  };

 export default  firebase.initializeApp(firebaseConfig)