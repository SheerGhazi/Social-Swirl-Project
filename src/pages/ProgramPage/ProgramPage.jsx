import React from 'react';
import HomeBanner from "../../components/Banner/HomeBanner";
import OurProgram from '../../components/Program/OurProgram';
import InternProgram from '../../components/Program/InternProgram';
import Traine from '../../components/Program/Traine';
import Traine2 from '../../components/Program/Traine2';
import StartPr from '../../components/Program/StartPr';
import Traini3 from '../../components/Program/Traini3';

const PgmDetails = [
  {
    title1: "Transforming",
    title2: "Enterprise",
    title3: "IT",
    description: "Web Development with Social Swirl",
    btn1: "Get Started",
  },
];

const ProgramPage = () => {
  return (
    <div>
      {PgmDetails.map((program, index) => (
        <HomeBanner
          key={index}
          title1={program.title1}
          title2={program.title2}
          title3={program.title3}
          description={program.description}
          btn1={program.btn1}
        />
      ))}
      <OurProgram />
      <InternProgram />
      <Traine />
      <Traine2 />
      <StartPr />
      <Traini3 />
    </div>
  );
};

export default ProgramPage;
