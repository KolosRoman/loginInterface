import React, {useState} from 'react';
import { MyInput } from './UI/input/MyInput.jsx';
import image from '../img/eye.png'




export const ValidPassword = ({correctPassword, resetErrorMessage}) => {
    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState('Поле не має бути порожнім');
    const [inputType, setInputType] = useState('password')




    const blurInput = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break;
            case 'password':
                setPasswordDirty(true)
                break;
        }
        if (!passwordError) {
            correctPassword(password)
        }
    }

    const focusInput = () => {
        if(resetErrorMessage) {
            resetErrorMessage('')
        }
    }

    const checkPassword = (e) => {
        const passwordInput = e.target.value;
        setPassword(passwordInput);

        if(!passwordInput) {
            setPasswordError('Поле не має бути порожнім');
            return;
        }

        if (passwordInput.length < 8) {
            setPasswordError('Пароль має складатися з 8-ми і більше символів');
            return;
        }
        setPasswordError('')

    }

    const onEyeClick = () => {
        if (inputType === 'password') {
            setInputType('text')
        } else {
            setInputType('password')
        }
    }
    

    return (

        <>
            <div className='password-block'>
                <MyInput 
                    vvalue={password}
                    onChange = {e => checkPassword(e)}
                    onBlur = {e => blurInput(e)}
                    onFocus ={focusInput}
                    type={inputType} 
                    name='password'
                    placeholder='Password' />
                <div onClick={onEyeClick} className='password-eye'><img src={image} alt="" /></div>
            </div>
            {(passwordDirty && passwordError) && <p className='error-message'>{passwordError}</p>}
        </>
    )
}