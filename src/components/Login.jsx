import React from 'react';
import { LoginForm } from './LoginForm.jsx';
import { LoginText } from './Text/LoginText/LoginText.jsx';
import { MainLogo } from './Text/MainLogo/MainLogo.jsx';
import { NetworksLink } from './UI/networksButton/NetworksButton.jsx';
import imageGoogle from '../img/Google.png';
import imageGit from '../img/Git.png'




export const Login = () => {
    


    return (

        <section className='main-container'>
            <MainLogo />
            <div className='logo-block'>
                <LoginText text='Log in to your account' />
                <div className='networks-block'>
                    <NetworksLink link='https://www.google.com/'>
                        <img src={imageGoogle} alt="Google" />
                        <p>Google</p>
                    </NetworksLink>
                    <NetworksLink link='https://github.com/'>
                        <img src={imageGit} alt="Git" />
                        <p>Github</p>
                    </NetworksLink>
                </div>
                <div className='line-block'>
                    <p className='line-block-text'>OR</p>
                </div>
                <LoginForm />
                <h3 className='main-text'>Is your company new to Qencode? <span className='main-text blue'>Sign up</span></h3>
            </div>           
        </section>

        
    )
}