// RecipeDemo.tsx
import React from 'react';
import RecipeCard from './RecipeCard';

interface RecipeDemoProps {
  recipes: {
    recipeId: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
  }[];
}

const RecipeDemo: React.FC<RecipeDemoProps> = ({ recipes }) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 pt-9 ">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.recipeId} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeDemo;
