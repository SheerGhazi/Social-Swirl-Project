import React from 'react'

const OurProgram = () => {
  return (
    <div className='py-20 px-3 space-y-5 md:px-16'>
      <div className="heading"><h3 className='font-semibold text-3xl text-center text-blue-400'>Our Program</h3></div>
      <div className="cont container bg-white px-4 py-2 rounded-3xl">

        <ul className='flex flex-col justify-evenly text-lg text-center font-medium md:flex-row'>
            <li><a href="#" className='hover:text-secondary'>InternShip Program</a></li>
            <li><a href="#" className='hover:text-secondary'>Trainee Program</a></li>
            <li><a href="#" className='hover:text-secondary'>Trainee Program</a></li>
            <li><a href="#" className='hover:text-secondary'>Courses</a></li>
        </ul>
      </div>
    </div>
  )
}

export default OurProgram
