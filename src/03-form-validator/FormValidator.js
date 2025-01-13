import { useState } from 'react'

export default function FormValidator() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [message, setMessage] = useState('')
    function checkFormErrors() {
        const errors = [];
        if (!email)
            errors.push('Email must be filled in')
        if (!password)
            errors.push('Password must be filled in');
        if (!passwordConfirm)
            errors.push('Password confirmn must be filled in')

        if ([...email].filter(i => i === '@').length !== 1)
            errors.push('An email must have exactly one @ sign');

        if (password.length < 8)
            errors.push('Password must be at least 8 characters');

        if (password != passwordConfirm)
            errors.push('Passwords must match')

        return errors
    }

    const handleSubmited = (e) => {
        e.preventDefault();

        const errors = checkFormErrors();
        setMessage(errors.length ? errors.join(', ') : 'User created')
    }

    return (
        <form onSubmit={handleSubmited}>
            <h2>Sign Up!</h2>
            <label htmlFor='email'>Email</label>
            <input
                type='text' name='email'
                onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor='password'>Password</label>
            <input
                type='password' name='password'
                onChange={e => setPassword(e.target.value)}
            />
            <label htmlFor='password-confirm'>Confirm Password </label>
            <input
                type='password' name='password-confirm'
                onChange={e => setPasswordConfirm(e.target.value)}
            />
            <div>{message}</div>
            <input type='submit' value='Submit' />
        </form>
    )
}