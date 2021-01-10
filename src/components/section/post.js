import React, { useState } from 'react';
import Tag from '../ui/tag'
import Item from '../ui/ingredient'
import Like from '../ui/like'
import data from '../../data/post.json'

const Post = (props) => {

    const [count, setCount] = useState(15)

    const clickHandler = () => {
        setCount(prevCount => prevCount + 1)
        document.querySelector(".fa-heart").classList.add("red")
        
    };

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

                <div className="social-icon">
                <i class="fas fa-heart" onClick={()=> clickHandler()} ></i>
                <span className="fab-text">
                        {count} Likes</span>
                </div>
            
                <div className="social-icon">
                <i class="fab fa-facebook-f"></i>
                <span className="fab-text">
                        SHARE</span>
                </div>

                <div className="social-icon">
                <i class="fab fa-twitter"></i>
                <span className="fab-text">
                        TWEET</span>
                </div>
            </div>

        </div>
    )
};

export default Post