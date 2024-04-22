import React from 'react';
import { Link } from 'react-router-dom';

interface Recipe {
    recipeId: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
}

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
    const { recipeId, title, date, description, imageUrl } = recipe;

    return (
      
          <div className="w-[90%] h-[544px] relative rounded-lg bg-white ">
            <Link to={`/detailspage/${recipeId}`}>
                <h2 className="left-[16px] top-[480px] absolute text-orange-500 text-sm font-normal leading-normal">Read More</h2>
            </Link>

            <p className="left-[16px] top-[368px] absolute text-stone-500 text-sm font-normal leading-normal">{description}</p>

            <h1 className="left-[16px] top-[320px] absolute text-zinc-800 text-2xl font-bold leading-loose">{title}</h1>

            <h6 className="w-[145px] left-[16px] top-[280px] absolute text-stone-500 text-sm font-normal font-Poppins leading-normal">{date}</h6>

           <div className='p-2'> 
           <img className="w-[340px] h-60  absolute rounded-xl" src={imageUrl} alt={title} />
           </div>

            <div className="relative">
                <div className="absolute lg:left-[272px] top-[33px] w-24 h-8 bg-orange-500 rounded">
                    <h6 className="absolute left-4 top-1 text-white text-sm font-normal font-Poppins leading-normal">DISHES</h6>
                </div>
            </div>
        </div>
      
    );
};

export default RecipeCard;
