import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react"
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        // console.log({user});

        createUserDocumentFromAuth(user);
    }

    useEffect(() => {
        const getRedirectResultFunc = async () => {
            const response = await getRedirectResult(auth)

            if (response) {
                const { user } = response;
                const userDocRef = await createUserDocumentFromAuth(user);

                console.log({userDocRef});
            }
        }

        getRedirectResultFunc();

    }, [])

    return (
        <div>
            <h1>SIgn In</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>

            <SignUpForm/>
        </div>
    )
}

export default SignIn;