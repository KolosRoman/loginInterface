import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { MainButton } from './UI/button/MainButton.jsx';
import { ValidEmail } from './ValidEmail.jsx';
import { ValidPassword } from './ValidPassword.jsx';


export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    

    const onCheckEmail = (email) => {
        setEmail(email)
    }

    const onCheckPassword = (password) => {
        setPassword(password)
    }


    const login = ({email, password}) => {
        fetch('https://auth-qa.qencode.com/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(response => {
                if(response.detail) {
                    navigate('/success')
                }
            })
            .catch(error => console.log(error))
    }



    const onSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            login({email, password});
        }
    }

    

    return (

        <form onSubmit={onSubmit}>
            <div className='input-block'>
                <ValidEmail correctEmail={onCheckEmail} text='georgedavid@qencode.com' />
        
                <ValidPassword correctPassword={onCheckPassword} />
            </div>
            
            <h3 className='main-text blue forgot'>
                <Link to="/forgot" className='main-text blue'>Forgot your password?</Link>
            </h3>
            <MainButton>Log in to Qencode</MainButton>
        </form>
    )
}