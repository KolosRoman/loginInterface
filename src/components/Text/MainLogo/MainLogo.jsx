import React from 'react';
import { Link } from 'react-router-dom'
import './MainLogo.scss';
import image from '../../../img/Vector.png'

export const MainLogo = () => {



    return (
        <div className='main-title'>
            <Link to="/">
                <img src={image} alt="logo" />
            </Link>
        </div>
    )
}