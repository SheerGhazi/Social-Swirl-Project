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
    },
    {
        title: "Graphics Designing",
        image: Tri2,
    },
    {
        title: "Marketing",
        image: Tri3,
    },
    {
        title: "Data & Networking",
        image: Tri4,
    },
];

const InternProgram = () => {
  return (
    <div className='w-full h-auto bg-gradient-to-b from-[#c5f5f7] to-[#d6f2f3] flex flex-col text-center gap-10 py-10 '>
      <div className="heading text-blue-400 font-semibold text-3xl">INTERNSHIP PROGRAMS</div>
      <div className="cards flex flex-col justify-evenly md:flex-row ">
        {InternProgramData.map((intern, index) => (
          <InternCard key={index} title={intern.title} image={intern.image} />
        ))}
      </div>
      <div className="btn">
        <a href="">
            <button className='text-white bg-blue-400  px-4 py-2 rounded-lg hover:bg-blue-600 '>Read More</button>
        </a>
      </div>
    </div>
  );
};

export default InternProgram;
