import React from 'react';

const modal = (props) => {

    let title = ""
    let list = ""

    if (props.list) {
        list = props.list.map(each => (
            <li>{each}</li>
        ))
    }

    if (props.title) {
        title = props.title
    }

    return (
        <div className="modal">
            <span className="modal-title">{title}</span>
            <ul>
                {list}
            </ul>
        </div>
    )
};

export default modal;

//<Modal title="" list="" />