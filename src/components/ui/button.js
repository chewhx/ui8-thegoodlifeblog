import React from 'react';

import { Link } from 'react-router-dom'

const button = (props) => {
    return (
        <Link to={props.link}><div className="button button-filled">
            {props.children}
        </div></Link>
    )
};

export default button;