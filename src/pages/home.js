import React from 'react'
import { CardMd, CardSm, Card } from '../components/ui/card'
import recipes from '../data/recipes.json'




const home = (props) => {


    const recipes1 = recipes.slice(0, 2)
    const recipes2 = recipes.slice(2, recipes.length)
    return (
        <section id="home">

            <div className="container">
                {recipes1.map((recipe, index) => (
                    <CardMd 
                        key={index}
                        title={recipe.name}
                        image={recipe.image}
                        description={recipe.description} />
                ))} 
                {recipes2.map((recipe, index) => (
                    <CardSm 
                        key={index}
                        title={recipe.name}
                        image={recipe.image}
                        description={recipe.description} />
                ))}
            </div>
        </section>

    )
};

export default home