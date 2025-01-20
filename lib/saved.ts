'use client';

import { useState, useEffect } from 'react';

export const useSavedRecipesState = () => {
  const fromStorage = localStorage.getItem('saved');
  if (!fromStorage) {
    localStorage.setItem('saved', '');
  }

  const savedItems = new Set((fromStorage || '').split('-'));
  const [savedRecipes, setSavedRecipes] = useState<Set<string>>(savedItems);

  const addRecipe = (dish: string) => {
    const formattedDish = dish.toLowerCase();
    setSavedRecipes((prevSaved) => new Set([...prevSaved, formattedDish]));
  };

  const removeRecipe = (dish: string) => {
    const formattedDish = dish.toLowerCase();
    setSavedRecipes((prevSaved) => {
      const newSet = new Set(prevSaved);
      newSet.delete(formattedDish);
      return newSet;
    });
  };

  const isRecipeSaved = (dish: string) => {
    const formattedDish = dish.toLowerCase();
    return savedRecipes.has(formattedDish);
  };

  useEffect(() => {
    const savedString = Array.from(savedRecipes).join('-');
    localStorage.setItem('saved', savedString);
  }, [savedRecipes]);

  return {
    savedRecipes,
    addRecipe,
    removeRecipe,
    isRecipeSaved,
  };
};
