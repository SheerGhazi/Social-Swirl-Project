import React from 'react'

const OurProgram = () => {
  return (
    <div className=' py-20 px-3 space-y-5 md:px-16'>
      <div className="heading "><h3 className='font-semibold text-3xl text-center text-blue-400'>Our Program</h3></div>
      <div className="cont container bg-white px-4 py-2 rounded-3xl">

        <ul className='flex justify-evenly text-lg font-medium'>
            <li><a href="#">INTERNSHIP PROGRAMS</a></li>
            <li><a href="#">Trainee Program</a></li>
            <li><a href="#">Trainee Program</a></li>
            <li><a href="#">Courses</a></li>
        </ul>
      </div>
    </div>
  )
}

export default OurProgram
