'use client';

import { useState, useEffect } from 'react';

export const useSavedRecipesState = () => {
  const [savedRecipes, setSavedRecipes] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const fromStorage = localStorage.getItem('saved');
      if (fromStorage) {
        const savedItems = new Set(fromStorage.split('-').filter(Boolean));
        setSavedRecipes(savedItems);
      }
    } catch (error) {
      console.error('Failed to read from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    try {
      const savedString = Array.from(savedRecipes).join('-');
      localStorage.setItem('saved', savedString);
    } catch (error) {
      console.error('Failed to write to localStorage:', error);
    }
  }, [savedRecipes]);

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

  return {
    savedRecipes,
    addRecipe,
    removeRecipe,
    isRecipeSaved,
  };
};
