import React from 'react'
import brand from '../../assets/logos/brand.svg'
import { Link } from 'react-router-dom'

const Nav = (props) => {

    console.log(window.outerWidth);

    if (window.outerWidth >= 1024){
        console.log("smaller than 1024");
    }
    const reveal = () => {
        const x = document.querySelectorAll("li:nth-child(n+2):nth-child(-n+3)")
        console.log(x);
        // const y = document.querySelector(".nav-burger")
        // if (x.style.height == "0px") {
        //     x.style.height = "auto";
        //   } else {
        //     x.style.height = "0px";
        //   }
    };
   


    return (
        <section id="nav">
            <nav>
                <ul>
                    <li><Link to='/'><img src={brand} alt="brand-logo" />
                    </Link></li>

                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/recipes'>Recipes</Link></li>
                    <li>Stories</li>
                    <li>Contact</li>
 
                </ul>
                <i className="fas fa-bars nav-burger"  onClick={()=>reveal()}></i>
            </nav>
        </section>

    )
};

export default Nav

