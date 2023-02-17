import React, {useContext, useState, useEffect,useRef, Children} from 'react' 
import { auth, Auth } from '../firebase'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import{doc, getDoc} from 'firebase/firestore'
import { async } from '@firebase/util'

const AuthContext = React.createContext()

export function useAuth() { 
    return useContext(AuthContext)
}

export function AuthProvider({Children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const userInfo = useRef()
    
    function signup(email, password){
        createUserWithEmailAndPassword(auth, email, password)
        return
 
    }

    function login (email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async, user => {
            setCurrentUser(user)
            setLoading(false)

        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        userInfo
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && Children}
            </AuthContext.Provider>

    )
}