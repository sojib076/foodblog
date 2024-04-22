import React from 'react';

interface CardProps {
  imageUrl: string;
  companyName: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, companyName, description }) => {
  return (
    <div className="lg:w-[404px] lg:h-[196px] w-full">
      <div className="flex items-center flex-row lg:justify-between">
        <img src={imageUrl} alt="Logo" className="border rounded-full w-16 h-16" />
        <h1 className="ml-4 text-xl font-bold p-2">{companyName}</h1>
      </div>
      <p className="lg:p-8 lg:w-full">{description}</p>
    </div>
  );
};

export default Card;
