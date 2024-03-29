import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { LoginText } from './Text/LoginText/LoginText.jsx';
import { MainLogo } from './Text/MainLogo/MainLogo.jsx';
import { MainButton } from './UI/button/MainButton.jsx';
import { ValidPassword } from './ValidPassword.jsx';


export const CreatePassword = ({emailUser}) => {
    const [email, setEmail] = useState(emailUser);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();
    

    const onCheckPassword = (password) => {
        setPassword(password)
    }

    const onCheckConfirmPassword = (password) => {
        setConfirmPassword(password)
    }

    const onFocusInput = (reset) => {
        setPasswordError(reset)
    }

    const login = ({email, password}) => {
        fetch('https://auth-qa.qencode.com/v1/auth/password-reset', {
        method: 'POST',
        body: JSON.stringify({
            email,
            redirect_url: "https://auth-qa.qencode.com/password-set",
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
        if(password === '' || confirmPassword === '') {
            setPasswordError('Поля не мають бути порожні');
            return
        }
        if (password !== confirmPassword) {
            setPasswordError('Паролі мають бути однакові');
            return
        }

        login({email, password});
        setPasswordError('')
    }


    return (
        <section className='main-container'>
            <MainLogo />
            <form onSubmit={onSubmit} className='logo-block'>
                <LoginText text='Create new Password?' />

                <div className='forgot-create-block'>
                    <div>
                        <p className='create-text'>Password</p>
                        <ValidPassword resetErrorMessage={onFocusInput} correctPassword={onCheckPassword} />
                    </div>

                    <div>
                        <p className='create-text'>Confirm Password</p>
                        <ValidPassword resetErrorMessage={onFocusInput} correctPassword={onCheckConfirmPassword} />
                    </div>

                    {passwordError && <p className='error-message'>{passwordError}</p>}

                    <MainButton>Reset Password</MainButton>
                </div>

            </form>
        </section>
    )
}