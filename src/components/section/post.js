import React from 'react';
import Tag from '../ui/tag'
import Item from '../ui/ingredient'
import data from '../../data/post.json'

const post = (props) => {
    return (
        <div className="post">
            <div className="post-tags">
                <Tag>Lunch</Tag>
                <Tag>Western</Tag>
                <Tag>Italian</Tag>
            </div>
            <div className="post-title">
                {data.title}
            </div>
            <div className="post-description">
                {data.description}
            </div>
            <div className="post-label">
                Ingredients:
            </div>
            <div className="post-ingredients">
                <ul>
                {data.ingredients.map(each => (
                    <Item>{each}</Item>
                ))}
                </ul>
            </div>
            <div className="post-label">
                Preparation:
            </div>
            <div className="post-description" >
                {data.preparation}
            </div>
            <div className="post-footer">
                {data.date} &nbsp; • &nbsp; {data.comments}
            </div>

        </div>
    )
};

export default post