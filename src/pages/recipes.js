import React from 'react'
import { CardMd, CardSm } from '../components/ui/card'
import recipes from '../data/recipes.json'


window.scrollTo(0, 0);



const home = (props) => {


    const recipes1 = recipes.slice(0, 2)
    const recipes2 = recipes.slice(2, recipes.length)
    return (
        <section id="recipes">

            <div className="container">
                {recipes1.map((recipe) => (
                    <CardMd 
                        key={recipe.id}
                        title={recipe.name}
                        id={recipe.id}
                        description={recipe.description} />
                ))} 
            </div>
            <div className="container">
                {recipes2.map((recipe) => (
                    <CardSm 
                        key={recipe.id}
                        title={recipe.name}
                        id={recipe.id}
                        description={recipe.description} />
                ))}
            </div>
        </section>

    )
};

export default home