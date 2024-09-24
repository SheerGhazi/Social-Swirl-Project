import React from "react";
import Right_Image from "../../assets/Images/image4.webp"

const Traine = () => {
  return (
    <>
      <div className="w-full  ">
        <h3 className="text-blue-400 font-semibold text-3xl text-center">
          {" "}
          Work with experts, grow your skills, and shape the future of digital
          solutions
        </h3>
        <div className="left-ctn w-full p-8 space-y-4  md:w-1/2 ">
          <h1 className="font-bold text-xl text-black">TRAINEE PROGRAMS</h1>
          <p className="font-normal text-base text-gray-900">
            We specialize in delivering cutting-edge IT services tailored to
            meet the unique needs of businesses across industries. Our expert
            team is dedicated to providing .
          </p>
          <ul className="text-base font-semibold">
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
        <div className="right-ctn w-full md:w-1/2">
            <img className="cover" src={Right_Image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Traine;
