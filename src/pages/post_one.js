import React from 'react';

import Modal from '../components/ui/modal'
import Post from '../components/section/post'

import blogroll from '../data/blogroll.json'

const post_one = (props) => {
    return (
        <>
        <section id="feature">
            <div className="container">
                <img className="post-image" src="https://source.unsplash.com//collection/160236/15" alt="cover" />
                <Modal title="Blogroll" list={blogroll} />
            </div>
            <div className="container">
                <img className="post-image" src="https://source.unsplash.com//collection/160236/15" alt="cover" />
                <Modal title="Blogroll" list={blogroll} />
            </div>
        </section>
        <section id="post">
            <div className="container">
            <Post />
            </div>
        </section>
        </>
    )
};

export default post_one