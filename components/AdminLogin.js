// Import the Firebase and Firestore libraries 
import { fireBaseAuth } from '../config/firebaseConfig'

// Create the state object to hold user information from Firebase Auth
const [state, setState] = useState({
    user: null
})

// Monitor authentication status
firebaseAuth().onAuthStateChanged((user) => {
    if(user) {
        setState([
            ...state,
            user
        ])
    } else { 
        // User signed out 
        setState([
            ...state,
            user: null
        ])
    }
})

// Logins with "Email" or "Password"
export function logIn(email, password) {
    return firebaseAuth().signInWithEmailAndPassword(email, password);
}

// Signs out current user 
export function signOut() {
    return firebaseAuth().signOut();
}
