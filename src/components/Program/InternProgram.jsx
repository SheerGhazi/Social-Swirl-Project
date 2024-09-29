import React from 'react';
import Tri from "../../assets/Images/traini1.png";
import Tri2 from "../../assets/Images/traini2.png";
import Tri3 from "../../assets/Images/traini3.png";
import Tri4 from "../../assets/Images/traini4.png";

import InternCard from './InternCard';

const InternProgramData = [
  {
      title: "Web Development",
      image: Tri,
      link: "https://example.com/web-development", 
  },
  {
      title: "Graphics Designing",
      image: Tri2,
      link: "https://example.com/graphics-designing", 
  },
  {
      title: "Marketing",
      image: Tri3,
      link: "https://example.com/marketing", 
  },
  {
      title: "Data & Networking",
      image: Tri4,
      link: "https://example.com/data-networking", 
  },
];

const InternProgram = () => {
  return (
    <div className='w-full h-auto flex flex-col text-center gap-10 py-10 '>
      <div className="heading text-blue-400 font-semibold text-3xl">INTERNSHIP PROGRAMS</div>
      <div className="cards flex flex-col justify-evenly items-center md:flex-row ">
        {InternProgramData.map((intern, index) => (
          <a className='flex flex-col justify-center items-center space-y-5' key={index} href={intern.link} target="_blank" rel="noopener noreferrer">
            <InternCard title={intern.title} image={intern.image} />
          </a>
        ))}
      </div>
      <div className="btn">
        <a href="https://example.com/read-more">
          <button className='text-white bg-blue-400  px-4 py-2 rounded-lg hover:bg-blue-600 '>Read More</button>
        </a>
      </div>
    </div>
  );
};

export default InternProgram;