import React from 'react';
import { useParams } from 'react-router-dom';

interface RecipeDetailsPageProps {
    id?: string;
}

const RecipeDetailsPage: React.FC<RecipeDetailsPageProps> = () => {
    const { id } = useParams<{ id: string }>();
    
    console.log(id);

    return (
        <div>
            This is a RecipeDetailsPage for ID: {id}
        </div>
    );
};

export default RecipeDetailsPage;
