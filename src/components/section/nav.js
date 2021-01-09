import React from 'react'
import brand from '../../assets/logos/brand.svg'

const Nav = (props) => {
    return (
        <section id="nav">
            <nav>
                <ul>
                    <li>About</li>
                    <li>Recipes</li>
                </ul>
                <img src={brand} alt="brand-logo" />
                <ul>
                    <li>Stories</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </section>

    )
};

export default Nav