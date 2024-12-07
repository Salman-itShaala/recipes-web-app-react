import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardComponent from "./components/RecipeCard";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  async function getRecipes() {
    try {
      const data = await fetch("https://dummyjson.com/recipes");

      const recipesObj = await data.json();

      setRecipes(recipesObj.recipes);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/search?q=${search}`)
      .then((res) => res.json())
      .then(console.log);
  }, [search]);

  return (
    <>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <h1>Recipes</h1>

      <div className="recipes-container">
        {recipes.map((recipeObj) => {
          return (
            <CardComponent
              key={recipeObj.id}
              image={recipeObj.image}
              name={recipeObj.name}
              rating={recipeObj.rating}
              reviewCount={recipeObj.reviewCount}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
