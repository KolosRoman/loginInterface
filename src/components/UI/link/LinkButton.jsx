import React from 'react';
import { Link } from 'react-router-dom';

import './LinkButton.scss'

export const LinkButton = ({children, ...props}) => {



    return (
        <Link to={props.linkTo} className='link-button'>{children}</Link>
    )
}