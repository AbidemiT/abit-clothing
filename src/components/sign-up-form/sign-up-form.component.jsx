import {useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import '../sign-up-form/sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})

    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match !!!')
            return
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});

            resetFormFields();

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert(`Oops... Email Already Exist`)
            }
           console.error(error); 
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your Email and Password</span>

            <form onSubmit={handleSubmit}>
                <FormInput label={'Display Name'} type="text" onChange={handleChange} name="displayName" id="displayName" required value={displayName}/>
                <FormInput label={'Email'} type="email" onChange={handleChange} name="email" id="email" required value={email}/>
                <FormInput label={'Password'} type="password" onChange={handleChange} name="password" id="password" required value={password}/>
                <FormInput label={'Confirm Password'} type="password" onChange={handleChange} name="confirmPassword" id="confirmPassword" required value={confirmPassword}/>

                <Button type="submit">Sign Up </Button>
            </form>
        </div>
    )
}

export default SignUpForm;