import { IngredientsForm } from "@/components/form/";
import { SuggestedRecipes } from "@/components/suggestions";
import { ingredients } from "@/lib/recipes";

export default function Home() {

  return (
    <>
      <div className="flex flex-col gap-8 px-4 py-2.5 pt-8">
        <main className="flex flex-col">
          <h1 className="text-[1.5rem] font-garamond font-semibold">Discover meal ideas with what you have</h1>
          <IngredientsForm ingredients={ingredients} />
        </main>
        <div className={`flex flex-col`} >
          <h1 className="text-[1.5rem] font-garamond font-semibold pb-4">Featured recipes you might like</h1>
          <SuggestedRecipes />
        </div>
      </div>
      <div className="aspect-square flex flex-grow bg-[url('/art.webp')] bg-contain bg-no-repeat bg-right-bottom" id="art">
      </div>
    </>
  );
}
