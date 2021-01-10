import React, { useState } from 'react';
import likebtn from '../../assets/social/like.svg'

const Like = (props) => {

    const [count, setCount] = useState(15)

    const clickHandler = () => {
        setCount(prevCount => prevCount + 1)
        document.querySelector(".fa-heart").classList.add("red")
        
    };

    return (
        <>
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
        
        </>
    )
};

export default Like;