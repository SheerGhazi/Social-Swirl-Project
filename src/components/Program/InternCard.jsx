import React from 'react';

const InternCard = ({ title, image }) => {
  return (
    <div className="intern-card">
      <img   src={image} alt={title} className="size-24" />
      <h3 className='font-bold text-xl'>{title}</h3>
    </div>
  );
};

export default InternCard;
