import React from 'react';
import logo1 from "../../assets/Images/logo.png";
import InternCard from './InternCard';

const InternProgramData = [
    {
        title: "Web Development",
        image: logo1,
    },
    {
        title: "Graphics Designing",
        image: logo1,
    },
    {
        title: "Marketing",
        image: logo1,
    },
    {
        title: "Data & Networking",
        image: logo1,
    },
];

const InternProgram = () => {
  return (
    <div className='w-full h-auto bg-gradient-to-b from-[#c5f5f7] to-[#d6f2f3] flex flex-col text-center gap-10 '>
      <div className="heading text-blue-400 font-semibold text-3xl">INTERNSHIP PROGRAMS</div>
      <div className="cards flex justify-evenly">
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
