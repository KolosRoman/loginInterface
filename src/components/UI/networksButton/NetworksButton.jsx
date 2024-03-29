import React from 'react';

import './NetworksButton.scss'

export const NetworksLink = ({children, ...props}) => {



    return (

        <div className='networks-item'>
            <a href={props.link} className='networks-link' target="_blank">{children}</a>
        </div>
    )
}