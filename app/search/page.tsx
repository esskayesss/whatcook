'use client';

import { PhStarBold, PhStarFill } from '@/components/icons/stars';
import { RecipeCard } from '@/components/recipe-card';
import { matchRecipes, Recipe } from '@/lib/recipes';
import { useSavedRecipesState } from '@/lib/saved';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const { savedRecipes, addRecipe, removeRecipe, isRecipeSaved } = useSavedRecipesState();


  const showVegetarian = searchParams.get('showVegetarian') === 'true';
  const showGlutenFree = searchParams.get('showGlutenFree') === 'true';
  const showGuiltFree = searchParams.get('showGuiltFree') === 'true';
  const ingredients = searchParams.get('ingredients')?.replaceAll('_', ' ').split('-') || [];

  const recipes = matchRecipes(ingredients, { showVegetarian, showGlutenFree, showGuiltFree });

  /*@ts-ignore*/
  const matching = recipes.filter(recipe => recipe.score > 0);
  /*@ts-ignore*/
  const nonMatching = recipes.filter(recipe => recipe.score <= 0);

  return (
    <main className="flex flex-col gap-8 px-4 py-2.5 pt-8">
      <div className='flex flex-col gap-1 mb-2'>
        <h1 className="font-garamond font-semibold text-3xl">Search Results</h1>
        <div className='flex flex-wrap gap-2'>
          {ingredients.map((value) => <span className='px-2 py-1 bg-green text-white w-fit'>{value}</span>)}
        </div>
      </div>
      <RecipeCards recipes={matching} ingredients={ingredients} saved={savedRecipes} addRecipe={addRecipe} removeRecipe={removeRecipe} />
      {nonMatching.length ? (<>
        <h1 className="font-garamond font-semibold text-3xl">More you might like</h1>
        <RecipeCards recipes={nonMatching} ingredients={ingredients} saved={savedRecipes} addRecipe={addRecipe} removeRecipe={removeRecipe} />
        </>
      ) : null
      }
    </main>
  );
}

interface RecipeCardsProps {
  recipes: Array<Recipe>,
  ingredients: Array<string>,
  addRecipe: (dish: string) => void,
  removeRecipe: (dish: string) => void,
  saved: Set<string>
}

const RecipeCards: React.FC<RecipeCardsProps> = ({recipes, ingredients, saved, addRecipe, removeRecipe}: RecipeCardsProps) => {
  return (
    <div className="flex flex-col gap-6">
      {recipes.map((recipe, index) => (
        <RecipeCard recipe={recipe} saved={saved} key={index} ingredients={ingredients}
          addRecipe={() => addRecipe(recipe.dish)} removeRecipe={() => removeRecipe(recipe.dish)} />
      ))}
    </div>
  )
}
