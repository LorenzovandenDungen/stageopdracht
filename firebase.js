import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLZimtVRUDO4mcRK-zEtHGNkUZ2ls8TUk",
    authDomain: "securityawarenesssysteem.firebaseapp.com",
    projectId: "securityawarenesssysteem",
    storageBucket: "securityawarenesssysteem.appspot.com",
    messagingSenderId: "809670232164",
    appId: "1:809670232164:web:61a443f524b834dcad3771",
    measurementId: "G-Y07CZGFH8T"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)