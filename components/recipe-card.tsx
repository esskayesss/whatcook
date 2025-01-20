import { Recipe } from "@/lib/recipes"
import { PhStarBold, PhStarFill } from "./icons/stars"
import fuzzysort from "fuzzysort"

interface RecipeCardProps {
  recipe: Recipe,
  addRecipe: (dish: string) => void,
  removeRecipe: (dish: string) => void,
  saved: Set<string>
  ingredients?: string[]
}

export const RecipeCard: React.FC<RecipeCardProps> = ({recipe, ingredients = [], addRecipe, removeRecipe, saved}: RecipeCardProps) => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
      <div className="flex flex-col gap-0.5 mb-4">
        <div className='flex justify-between items-center'>
          <h2 className="font-garamond font-semibold text-2xl">{recipe.dish}</h2>
          {saved.has(recipe.dish.toLowerCase()) ?
            <PhStarFill className='text-2xl text-yellow hover:cursor-pointer' 
              onClick={(_) => {
                removeRecipe(recipe.dish)
              }} 
            /> :
            <PhStarBold className='text-2xl text-yellow hover:cursor-pointer' 
              onClick={(_) => {
                addRecipe(recipe.dish)
              }}
            />
          }
        </div>
        <div className="flex gap-2">
          <span>{recipe.calories} cal</span> · 
          <p>
            <span className="text-yellow">★</span> 
            <span>{recipe.rating} ({recipe.n_ratings})</span>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {recipe.ingredients.map((ingredient, i) => {
          var matching = false
          for (const item of ingredients) {
            if (fuzzysort.single(item, ingredient)) {
              matching = true;
              break;
            }
          }
          return (
            <span
              key={i}
              className={`px-3 py-1 rounded-full border border-gray ${matching?'border-green bg-green text-white':null}`} >
              {ingredient}
            </span>
          )
        })}
      </div>

      <div className="flex flex-wrap gap-4 *:text-green *:font-medium">
        <span className={`${recipe.vegetarian ? 'visible' : 'hidden'}`}>
          Vegetarian
        </span>
        <span className={`${recipe.glutenFree ? 'visible' : 'hidden'}`}>
          Gluten-Free
        </span>
        <span className={`${recipe.guiltFree ? 'visible' : 'hidden'}`}>
          Guilt-Free
        </span>
      </div>

      <div className="mt-4">
        <h3 className="font-garamond font-semibold text-xl mb-2">Steps:</h3>
        <ol className="list-decimal list-inside">
          {recipe.steps.map((step, i) => (
            <li key={i} className="mb-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
