import React, { useEffect, useState } from "react";

const SearchRecipe = () => {
  const [search, setSearch] = useState("");
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  async function getSearchedRecipes() {
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${search}`);
    const data = await res.json();

    setSearchedRecipes(data.recipes);
  }

  useEffect(() => {
    getSearchedRecipes();
  }, [search]);

  return (
    <div>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
      <ol>
        {searchedRecipes.map((recipe) => {
          return <li>{recipe.name}</li>;
        })}
      </ol>
    </div>
  );
};

export default SearchRecipe;
