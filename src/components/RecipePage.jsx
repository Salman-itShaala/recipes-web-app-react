import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "./RecipeCard";
import Test from "./Test";

const RecipePage = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  async function getRecipe() {
    try {
      const data = await fetch(`https://dummyjson.com/recipes/${id}`);

      const recipe = await data.json();

      setRecipe(recipe);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div>
      <h1>{recipe?.name}</h1>
      <div className="">
        <img src={recipe?.image} alt="" width={400} />
        <p>Ingredients</p>
        <ol>
          {recipe?.ingredients.map((ing) => {
            return <li>{ing}</li>;
          })}
        </ol>

        <p>Instructions</p>
        <ol>
          {/* To do */}
          <li>Season chicken thighs with salt and pepper.</li>
          <li>Grill or bake chicken until fully cooked.</li>
          <li>
            In a bowl, combine diced mango, chopped red onion, cilantro, minced
            jalapeño, and lime juice
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RecipePage;
