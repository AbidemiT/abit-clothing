import { initializeApp } from "firebase/app"

import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTD4Xmg4MgrRD1Z4Mriaokq8-ybWY_tu4",
    authDomain: "abit-clothing-db.firebaseapp.com",
    projectId: "abit-clothing-db",
    storageBucket: "abit-clothing-db.appspot.com",
    messagingSenderId: "32231523339",
    appId: "1:32231523339:web:f8705506aa3cfc783cf30e"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log({ userDocRef });

    const userSnapshot = await getDoc(userDocRef);
    console.log({ userSnapshot });
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { email, displayName } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log('Error Creating User', error.message);
        }

    }

    return userDocRef;
}