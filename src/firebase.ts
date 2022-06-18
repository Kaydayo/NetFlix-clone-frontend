// Import the functions you need from the SDKs you need
// import {initializeApp} from "firebase/app";
// import {getAuth} from "firebase/auth"
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {initializeApp} from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZYDKu4jB79qGIT3hp42pUAIqU09Uz7Z8",
    authDomain: "my-netflix-clone-f1b93.firebaseapp.com",
    projectId: "my-netflix-clone-f1b93",
    storageBucket: "my-netflix-clone-f1b93.appspot.com",
    messagingSenderId: "436399725266",
    appId: "1:436399725266:web:917c19a08b2ced1e84eb0b",
    measurementId: "G-4P34D0CJD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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

const getUsers = async (db:any) => {
    const usersCol = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    return usersList;
}

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
    getUsers
}