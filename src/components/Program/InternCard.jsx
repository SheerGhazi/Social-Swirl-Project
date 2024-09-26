import React from 'react';

const InternCard = ({ title, image }) => {
  return (
    <div className="intern-card text-center">
      <img
        src={image}
        alt={title}
        className="size-24 transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <h3 className="font-bold text-xl mt-2">{title}</h3>
    </div>
  );
};

export default InternCard;
