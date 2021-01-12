import React, { useState } from 'react'
import brand from '../../assets/logos/brand.svg'
import { Link } from 'react-router-dom'

const Nav = (props) => {

    const [state, setState] = useState(true)

    console.log("state: " + state)
    const show = (x) => {
        x.forEach(each => each.style.display = "block");
        x.forEach(each => each.addEventListener("click", reveal))
    }

    const hide = (x) => {
        x.forEach(each => each.style.display = "none")   
    }

    const reveal = () => {
        
        const x = document.querySelectorAll("li:nth-child(n+2):nth-child(-n+5)")
        if (state) {
            show(x)
        }
        if (!state) {
            hide(x)
        }
        
        setState(!state)
        // const y = document.querySelector(".nav-burger")
        // if (x.style.height == "0px") {
        //     x.style.height = "auto";
        //   } else {
        //     x.style.height = "0px";
        //   }
    };

    const navlinks = [
        {to: '/about', text: 'About'},
        {to: '/recipes', text: 'Recipes'},
        {to: '/stories', text: 'Stories'},
        {to: '/contact', text: 'Contact'}
    ]


    return (
        <section id="nav">
            <nav>
                <ul>
                    <li><Link to='/'><img src={brand} alt="brand-logo" />
                    </Link></li>
                    {navlinks.map(link => <li><Link to={link.to}>{link.text}</Link></li>)}
                </ul>
                <i className="fas fa-bars nav-burger" onClick={()=>reveal()}></i>
            </nav>
        </section>

    )
};

export default Nav

