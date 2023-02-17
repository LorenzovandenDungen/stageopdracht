import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_APIKEY,
    projectId: process.env.NEXT_PUBLIC_APIKEY
    storageBucket: process.env.NEXT_PUBLIC_APIKEY,
    messagingSenderId: process.env.NEXT_PUBLIC_APIKEY,
    appId: process.env.NEXT_PUBLIC_APIKEY,
    measurementId: NEXT_PUBLIC_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)

