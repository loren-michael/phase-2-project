import '../App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Search from './Search';
import RecipeContainer from './RecipeContainer';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/recipes`)
    .then(r => r.json())
    .then(recipes => setRecipes(recipes))
  }, [])

  return (
    <div>
      <NavBar />
      <Search recipes={recipes} />
      <RecipeContainer recipes={recipes} />
    </div>
  );
}

export default App;
