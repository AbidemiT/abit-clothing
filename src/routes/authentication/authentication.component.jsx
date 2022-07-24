import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import '../authentication/authentication.styles.scss'

const Authentication = () => {
    
    // useEffect(() => {
    //     const getRedirectResultFunc = async () => {
    //         const response = await getRedirectResult(auth)

    //         if (response) {
    //             const { user } = response;
    //             const userDocRef = await createUserDocumentFromAuth(user);

    //             console.log({userDocRef});
    //         }
    //     }

    //     getRedirectResultFunc();

    // }, [])

    return (
        <div className="authentication-container">
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}

            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication;