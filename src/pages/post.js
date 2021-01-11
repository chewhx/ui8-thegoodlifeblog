import React from 'react';

import Post from '../components/section/post'

import recipes from '../data/recipes.json'

const post = ({ match }) => {

    const matchedRecipe = recipes.filter(recipe => recipe.id === match.params.id)[0]

    const imageUrl = "https://storage.googleapis.com/recipes-9ru4lzic/"  +  matchedRecipe.id + ".jpg"

    return (
        <section id="post">
            <div className="container">
                <img className="post-image" src={imageUrl} alt="cover" />
            <Post 
                key={matchedRecipe.id}
                title={matchedRecipe.name}
                tags={matchedRecipe.tags}
                description={matchedRecipe.description} />
            </div>
        </section>
    )
};

export default post