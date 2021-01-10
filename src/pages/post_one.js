import React from 'react';

import Modal from '../components/ui/modal'
import Post from '../components/section/post'

import blogroll from '../data/blogroll.json'

const post_one = (props) => {
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

export default post_one