import React, {useContext, useState, useEffect,useRef} from 'react' 
import { Auth } from '../firebase'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import{doc, getDoc} from 'firebase/firestore'
