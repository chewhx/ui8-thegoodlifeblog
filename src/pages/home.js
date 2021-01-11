import React from 'react';
import Button from '../components/ui/button'

const home = (props) => {
    return (
        <section id="home">
            <div className="overlay">
                <p>There is no <br />sincerer love than <br /> <strong>the love of food</strong>.</p>
                <Button link="/recipes">Explore our recipes</Button>
            </div>
        </section>
    )
};

export default home;