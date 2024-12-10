import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchRecipe = () => {
  const [search, setSearch] = useState("");
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  async function getSearchedRecipes() {
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
    const data = await res.json();

    setSearchedRecipes(data.recipes);
  }

  useEffect(() => {
    if (search === "") {
      setSearchedRecipes([]);
      return;
    }
    getSearchedRecipes();
  }, [search]);

  return (
    <div>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
      <ol style={{ display: "flex", flexDirection: "column" }}>
        {searchedRecipes.map((recipe) => {
          return <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>;
        })}
      </ol>
    </div>
  );
};

export default SearchRecipe;
