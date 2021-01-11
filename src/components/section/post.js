import React, { useState, useMemo } from 'react';
import Tag from '../ui/tag'
import Item from '../ui/ingredient'
import data from '../../data/post.json'
import { rDate } from '../utils/rDate'

const Post = (props) => {

    const [count, setCount] = useState(15)

    const clickHandler = () => {
        setCount(prevCount => prevCount + 1);
        document.querySelector(".fa-heart").classList.add("red");
    }

    const date = useMemo(()=> {
        return rDate()
    }, [])



    return (
        <div className="post">
            <div className="post-tags">
                {props.tags ? props.tags.map((tag, index) => <Tag key={index}>{tag}</Tag>) :
                (
                <>
                <Tag>Lorem</Tag>
                <Tag>Ipsum</Tag>
                <Tag>Dolor</Tag>
                </>
                )
                }
            </div>
            <div className="post-title">
                {props.title ? props.title : "Duis aute irure dolor in reprehenderit in voluptate"}
            </div>
            <div className="post-description">
                {props.description ? props.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
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
                Unfortunately. There are no real instructions here for preparing this delicious looking dish, because this is only a live mockup site. And for placeholding purposes, I'm going to insert Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="post-footer">
                {date} &nbsp; • &nbsp; 15 Comments

                <div className="social-icon">
                <i className="fas fa-heart" onClick={()=> clickHandler()} ></i>
                <span className="fab-text">
                        {count} Likes</span>
                </div>
            
                <div className="social-icon">
                <i className="fab fa-facebook-f"></i>
                <span className="fab-text">
                        SHARE</span>
                </div>

                <div className="social-icon">
                <i className="fab fa-twitter"></i>
                <span className="fab-text">
                        TWEET</span>
                </div>
            </div>

        </div>
    )
};

export default Post