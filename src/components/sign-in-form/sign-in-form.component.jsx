import { useState } from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import '../sign-in-form/sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })

    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);

            resetFormFields();

        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Password incorrect!!!')
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email!!!')
                    break;

                default:
                    console.log(error)
                    break;
            }


            if (error.code === "auth/email-already-in-use") {
                alert(`Oops... Email Already Exist`)
            }
            console.error(error);
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account??</h2>
            <span>Sign In with your Email and Password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label={'Email'} type="email" onChange={handleChange} name="email" id="email" required value={email} />
                <FormInput label={'Password'} type="password" onChange={handleChange} name="password" id="password" required value={password} />
                <div className='buttons-container'>
                    <Button type="submit">Sign In </Button>
                    <Button type="button" buttonType={'google'} onClick={logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;