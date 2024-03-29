import React from 'react';
import image from '../img/vitaemo.jpg';




export const SuccessPage = () => {
    

    return (

        <div className="success-container">
            <div className="success-photo">
                <img src={image} alt="Квіти" className="success-photo-item" />
            </div>
        </div>

        
    )
}