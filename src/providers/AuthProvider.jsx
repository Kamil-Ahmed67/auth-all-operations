import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider=new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const[loading,setLoading]=useState(true)
    const name = 'Kamil Ahmed'
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
       const unSubscribe= onAuthStateChanged(auth,currenUser=>{
            setUser(currenUser);
            setLoading(false)
        })
        return () =>{
            unSubscribe();
        }
    }, [])
    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth);
    }
    //Sign In with google
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const authInfo = {
        name,
        createUser,
        signInUser,
        user,
        signOutUser,
        loading,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part who will have access to this context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;