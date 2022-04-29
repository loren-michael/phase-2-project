import '../App.css'
import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Search from './Search'
import RecipeContainer from './RecipeContainer'

function App() {

  return (
    <div>
      <NavBar />
      <Search />
      <RecipeContainer />
    </div>
  );
}

export default App;
