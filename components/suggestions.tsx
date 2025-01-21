'use client'

import { getRecipe, matchRecipes, Recipe } from "@/lib/recipes";
import { useSavedRecipesState } from "@/lib/saved";
import { useEffect, useState } from "react";
import { RecipeCard } from "./recipe-card";

export const SuggestedRecipes = () => {
  const { savedRecipes, addRecipe, removeRecipe } = useSavedRecipesState();
  const [matchedRecipes, setMatchedRecipes] = useState<Recipe[]>([])
  const [favoriteIngredients, setFavoriteIngredients] = useState<string[]>([])

  useEffect(() => {
    var favorites = new Set<string>()
    savedRecipes.forEach((dish) => {
      const recipe = getRecipe(dish)
      if(recipe) favorites = new Set([...favorites, ...recipe.ingredients])
    })

    setMatchedRecipes(matchRecipes(Array.from(favorites), 3))
    setFavoriteIngredients(Array.from(favorites))
  }, [savedRecipes])

  return (
    <div className="flex flex-col gap-4">
      {matchedRecipes.map((recipe, index) => {
        return (
          <RecipeCard recipe={recipe} addRecipe={addRecipe} removeRecipe={removeRecipe} saved={savedRecipes} 
            ingredients={Array.from(favoriteIngredients)} key={index} />
        )
      })}
    </div>
  )
}
