import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { LoginText } from './Text/LoginText/LoginText.jsx';
import { MainLogo } from './Text/MainLogo/MainLogo.jsx';
import { MainButton } from './UI/button/MainButton.jsx';
import { LinkButton } from './UI/link/LinkButton.jsx';
import { ValidEmail } from './ValidEmail.jsx';


export const ForgotPassword = ({getEmail}) => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const onCheckEmail = (email) => {
        setEmail(email)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        if (email) {
            getEmail(email);
            navigate('/create');
        }
        
    }


    return (
        <section className='main-container'>
            <MainLogo />
            <form onSubmit={onSubmit} className='logo-block'>
                    <LoginText text='Forgot Password?' />
                    <div className='forgot-create-block'>
                        <ValidEmail correctEmail={onCheckEmail} text='Enter your email' />

                        <MainButton>Send</MainButton>

                        <LinkButton linkTo='/'>Cancel</LinkButton>
                    </div>
            </form>
        </section>
    )
}