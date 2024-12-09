import React, { useEffect, useState } from "react";
import CardComponent from "./RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

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

  return (
    <>
      {/* <input type="text" onChange={(e) => setSearch(e.target.value)} /> */}
      <div className="hero-section"></div>
      <h1>Super Delicious</h1>
      <div className="recipes-container">
        {recipes.slice(0, 3).map((recipeObj) => {
          return (
            <CardComponent
              key={recipeObj.id}
              id={recipeObj.id}
              image={recipeObj.image}
              name={recipeObj.name}
              rating={recipeObj.rating}
              reviewCount={recipeObj.reviewCount}
            />
          );
        })}
      </div>
      <h1>Sweet Delicious</h1>

      <div className="recipes-container">
        {recipes.slice(3, 6).map((recipeObj) => {
          return (
            <CardComponent
              key={recipeObj.id}
              id={recipeObj.id}
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
};

export default Home;
