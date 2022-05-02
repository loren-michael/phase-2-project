import React from 'react';
// import { Card } from "semantic-ui-react";


function RecipeCard({ recipe }) {
    return (
        // <Card>
            <div className="recipeCard" >
                <h4>{recipe.name}</h4>
                <img src={recipe.img} alt={recipe.name} />
            </div>
        // </Card>
    )
};

export default RecipeCard