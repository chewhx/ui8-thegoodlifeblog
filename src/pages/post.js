import React from 'react';

import Post from '../components/section/post'

const post = (props) => {
    return (
        <>
        <section id="post">
            <div className="container">
                <img className="post-image" src="https://source.unsplash.com//collection/160236/15" alt="cover" />
            <Post />
            </div>
        </section>
        </>
    )
};

export default post