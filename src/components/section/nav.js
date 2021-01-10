import React from 'react'
import brand from '../../assets/logos/brand.svg'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <section id="nav">
            <nav>
                <ul>
                    <li>About</li>
                    <li><Link to='/post'>Recipes</Link></li>
                </ul>
                <Link to='/'>
                <img src={brand} alt="brand-logo" />
                </Link>
                <ul>
                    <li>Stories</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </section>

    )
};

export default Nav

