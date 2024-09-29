import React from "react";

const InternCard = ({ title, image }) => {
  return (
    <>
      <img
        src={image}
        alt={title}
        className="size-24 transition-transform duration-300 ease-in-out transform hover:scale-105 "
      />
      <h3 className="font-bold text-xl text-center mt-2">{title}</h3>
    </>
  );
};

export default InternCard;
