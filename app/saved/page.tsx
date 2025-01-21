'use client'

import { RecipeCard } from "@/components/recipe-card";
import { getRecipe } from "@/lib/recipes";
import { useSavedRecipesState } from "@/lib/saved";

export default function SavedRecipesPage() {
  const { savedRecipes, addRecipe, removeRecipe } = useSavedRecipesState();

  return (
    <main className="flex flex-col gap-8 px-4 py-2.5 pt-8">
      <h1 className="font-garamond text-3xl font-semibold">Saved Recipes</h1>
      {Array.from(savedRecipes).map((dish, index) => {
        const recipe = getRecipe(dish)
        if(!recipe) return null
        return (
          <RecipeCard key={index} 
            recipe={recipe} saved={savedRecipes} addRecipe={addRecipe} removeRecipe={removeRecipe} />
        )
      })}
    </main>
  )
}
