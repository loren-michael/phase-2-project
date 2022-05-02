import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeContainer({ recipes }) {
    return (
        <div>RecipeContainer
            {recipes.map((recipe) => {
                return(
                    <RecipeCard key={recipe.id} recipe={recipe} />
                )
            })}
        </div>
    )
}

export default RecipeContainer