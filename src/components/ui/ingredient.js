import React from 'react';

const ingredient = (props) => {
    return (
        <div className="ingredient-item">
            <li>{props.children}</li>
        </div>
    )
};

export default ingredient;