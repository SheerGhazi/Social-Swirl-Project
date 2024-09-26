import React from 'react'
import Right_Image from "../../assets/Images/Pgm3.png"

const Traini3 = () => {
  return (
    < >
    <h3 className="text-blue-400 font-semibold text-3xl text-center text-wrap mt-10">
         {" "}
         Work with experts, grow your skills, and shape the future of digital
         solutions
       </h3>
     <div className="w-full  md:flex px-20 mt-5 py-8 ">
      
       <div className="left-ctn w-full p-6 space-y-4 flex flex-col justify-center   md:w-1/2 ">
         <h1 className="font-bold text-4xl  text-black">TRAINEE PROGRAMS</h1>
         <p className="font-normal text-base text-gray-800">
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

       <div className='w-full flex md:w-[65vw] '>
       <div className="left-ctn w-fit   md:w-1/2 md:flex flex-col justify-center items-center " >
           <img className="cover w-72 h-72 rounded-3xl" src={Right_Image} alt="" />
           
       </div>
       <div className="right-ctn w-fit  md:w-1/2 md:flex flex-col justify-center items-center space-y-4 " >
           <img className="cover w-72 h-72 rounded-3xl" src={Right_Image} alt="" />
           <img className="cover w-72 h-72 rounded-3xl" src={Right_Image} alt="" />
       </div>
       </div>
     </div>
   </>
  )
}

export default Traini3
