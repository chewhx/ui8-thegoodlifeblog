import React, { useRef } from 'react';
import image from '../../assets/images/salad.png'

export const CardLg = (props) => {

    return (
        <div className="card-lg">
            <div>
            <img className="card-image" src={image} alt="food" />
            </div>
            <div className="card-title">
            Effortless Spinach and Chicken Salad
            </div>
            <div className="card-body">
            Pre-cooked chicken can be used in this recipe for an even quicker meal. I used pepita seeds, but sunflower seeds or other nuts will also work. Best if served right away. Pre-cooked chicken can be used in this recipe for an even quicker meal. I used pepita seeds, but sunflower seeds or other nuts will also work. Best if served right away. 
            </div>
            <div className="card-footer">
            15 September 2015  &nbsp; •  &nbsp;  Read More        
            </div>
        </div>
    )
};


export const CardMd = (props) => {

    return (
        <div className="card-md">
            <div className="card-title">
            Effortless Spinach and Chicken Salad
            </div>
            <div>
            <img className="card-image" src={image} alt="food" />
            </div>
            <div className="card-body">
            Pre-cooked chicken can be used in this recipe for an even quicker meal. I used pepita seeds, but sunflower seeds or other nuts will also work. Best if served right away. Pre-cooked chicken can be used in this recipe for an even quicker meal. I used pepita seeds, but sunflower seeds or other nuts will also work. Best if served right away. 
            </div>
            <div className="card-footer">
            15 September 2015  &nbsp; •  &nbsp;  Read More        
            </div>
        </div>
    )
};

export const CardSm = (props) => {

    return (
        <div className="card-sm">
            <div className="card-title">
            Effortless Spinach and Chicken Salad
            </div>
            <div>
            <img className="card-image" src={image} alt="food" />
            </div>
            <div className="card-body">
            Slivered up in a flash with handheld Japanese mandoline, then tossed with a lemony dressing, raw zucchini tastes great and has nice texture 
            </div>
            <div className="card-footer">
            15 September 2015  &nbsp; •  &nbsp;  Read More        
            </div>
        </div>
    )
};

export default { CardLg, CardMd, CardSm }