import React, {useState, useEffect} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import { ForgotPassword } from './ForgotPassword.jsx';
import { LoginText } from './Text/LoginText/LoginText.jsx';
import { MainTitle } from './Text/MainLogo/MainLogo.jsx';
import { MainButton } from './UI/button/MainButton.jsx';
import { MyInput } from './UI/input/MyInput.jsx';
import { NetworksButton } from './UI/networksButton/NetworksButton.jsx';




export const ValidEmail = ({correctEmail, text}) => {
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Поле не має бути порожнім');


    // useEffect(() => {
    //     if (!emailError) {
    //         correctEmail(email)
    //     }
    // }, [emailError])


    const blurInput = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
        }

        if (!emailError) {
            correctEmail(email)
        }
    }




    const checkEmail = (e) => {
        const loginInput = e.target.value;
        setEmail(loginInput)

        if(!loginInput) {
            setEmailError('Поле не має бути порожнім');
            return;
        }

        if(!loginInput.includes('@')) {
            setEmailError('Логін має містити символ @');
            return;
        }
    
        if(loginInput.substring(0, 3).includes('@')) {
            setEmailError('Зліва від символа @ має бути 3 і більше символів');
            return;
        }

        const dogIndex = loginInput.indexOf('@');
        const domenName = loginInput.substring(dogIndex + 1);
        
        if (!domenName.includes('.')) {
            setEmailError("Праворуч від @ має бути доменне ім'я і регіон розділені крапкою");
            return;
        }

        if (domenName.substring(0, 2).includes('.')) {
            setEmailError('У доменному імені має бути мінімум 2 символи');
            return;
        }

        const domenIndex = domenName.indexOf('.');
        const regionName = domenName.substring(domenIndex + 1);

        if (regionName.length < 2) {
            setEmailError('У імені регіону має бути мінімум 2 символи');
            return;
        }

        setEmailError('');
    }
    

    return (

        <div>
            <MyInput 
                value={email}
                onChange = {e => checkEmail(e)}
                onBlur = {e => blurInput(e)}
                type='text'
                name='email'
                placeholder={text} />
            {(emailDirty && emailError) && <p className='error-message'>{emailError}</p>}
        </div>
    )
}