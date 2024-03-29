import React from 'react';

import './MainButton.scss'

export const MainButton = ({children, ...props}) => {



    return (
        <button className='main-button'>{children}</button>
    )
}