import React from "react";
import Right_Image from "../../assets/Images/Pgm1.png"

const Traine = () => {
  return (
    < >
     <h3 className="text-blue-400 px-1 font-semibold text-3xl text-center  text-wrap mt-10 md:px-40">
          {" "}
          Work with experts, grow your skills, and shape the future of digital
          solutions
        </h3>
      <div className="w-full md:flex md:px-20 mt-5  ">
       
        <div className="left-ctn w-full flex flex-col justify-center p-6 space-y-4  md:w-[40vw] lg:w-1/2 md:px-10 lg:px-20 ">
          <h1 className="font-bold text-4xl  text-black">TRAINEE PROGRAMS</h1>
          <p className="font-normal text-base text-gray-900">
            We specialize in delivering cutting-edge IT services tailored to
            meet the unique needs of businesses across industries. Our expert
            team is dedicated to providing .
          </p>
          <ul className="text-lg font-semibold">
            <li>App Development</li>
            <li>Digital Marketing</li>
            <li>AI Solutions</li>
            <li>Training Programs</li>
          </ul>
          <a href="">
            <button className="text-white bg-blue-400  px-4 py-2 mt-4 rounded-lg  hover:bg-blue-600 ">
              Read More
            </button>
          </a>
        </div>
        <div className="right-ctn w-full p-6 md:w-1/2 md:flex justify-center items-center " >
            <img className="cover w-auto  h-auto  cursor-pointer rounded-3xl transition-transform duration-300 ease-in-out transform md:h-[70vh] hover:scale-105" src={Right_Image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Traine;
