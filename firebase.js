// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAX0LwQ5Fs4mw8THIAhGzP_3mrm_-3-MQ",
    authDomain: "securityawar.firebaseapp.com",
    projectId: "securityawar",
    storageBucket: "securityawar.appspot.com",
    messagingSenderId: "491039581195",
    appId: "1:491039581195:web:53c6719af3efb61654130e"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
