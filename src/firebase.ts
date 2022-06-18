// Import the functions you need from the SDKs you need
// import {initializeApp} from "firebase/app";
// import {getAuth} from "firebase/auth"
// import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMkUZn8KbFX3vQ5uc9DmlqlYe2d0fLet0",
    authDomain: "new-netflix-9c09c.firebaseapp.com",
    projectId: "new-netflix-9c09c",
    storageBucket: "new-netflix-9c09c.appspot.com",
    messagingSenderId: "595616380238",
    appId: "1:595616380238:web:20b8e89ceea20102045a1f",
    measurementId: "G-D4QP5LQY2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const logInWithEmailAndPassword = async (email:any, password:any) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err:any) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (email: string, password:string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            authProvider: "local",
            email,
        });
        console.log('successful')
    } catch (err:any) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};


export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout
}

