import React, {useState} from 'react';
import { ForgotPassword } from './ForgotPassword.jsx';
import { Login } from './Login.jsx';
import {Route, Routes} from 'react-router-dom'
import { CreatePassword } from './CreatePassword.jsx';
import { SuccessPage } from './SuccessPage.jsx';


export const App = () => {
    const [email, setEmail] = useState('');

    const onGetEmail = (email) => {
        setEmail(email)
    }



    return (
        <div className='main-block'>
            <Routes>
                <Route path="/" element={<Login />}>
                </Route>
                <Route path='/forgot' element={<ForgotPassword getEmail={onGetEmail} />}>
                </Route>
                <Route path='/create' element={<CreatePassword emailUser={email} />}>
                </Route>
                <Route path='/success' element={<SuccessPage />}>
                </Route>
            </Routes>
        </div>
    )
}