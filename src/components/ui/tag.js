import React from 'react';

const tag = (props) => {
    return (
        <div className="tag">
            {props.children}
        </div>
    )
};

export default tag;