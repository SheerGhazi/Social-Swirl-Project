import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-[#c5f5f7] to-sky-100 min-h-screen flex items-center justify-center p-4">
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-6xl w-full">
      <div className="flex flex-col md:flex-row">
        <div className="p-2 md:p-16 md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-[#494848] font-normal text-lg leading-relaxed">
            Social Swirl, founded by Danial Khan in 2022, is a dynamic
            software company based in the United Kingdom. Specializing in
            innovative software and media solutions we focus on new
            creations to help businesses and individuals optimize their
            online presence and achieve their goals. Our mission is to
            provide high quality, personalized, reliable, and affordable
            services. With an experienced team dedicated to excellence, we
            aim to build lasting client relationships based on trust,
            transparency, and open communication.
          </p>
        </div>
        <div className="md:w-1/3 p-5 object-cover lg:p-10">
          <img
            src="src/assets/Images/image4.webp"
            alt="Person typing on laptop"
            className="w-full h-full  rounded-2xl"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUs
