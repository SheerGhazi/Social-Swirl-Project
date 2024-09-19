import React from 'react'

import { teamMembers } from './teamMembers'

const TeamMembers = () => {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-[#c5f5f7] py-20 px-3 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 lg:ml-24">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg md:text-xl font-semibold text-blue-600 mb-2">
              MERN Stack Developer
            </p>
            <p className="text-gray-600 mb-6">
              Social Swirl, founded by Danial Khan in 2022, is a dynamic
              software.
            </p>
            <ul className="list-none text-black space-y-2 text-lg md:text-xl font-semibold">
              <li>Graphic Designer</li>
              <li>Digital Marketer</li>
              <li>Social Media Marketer</li>
              <li>Sales Executive</li>
              <li>Senior SEO Developer</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative md:w-1/2 flex justify-center items-center mt-16 md:mt-0">
            {/* Center Image */}
            <div className="relative w-72 h-72 border-2 border-black rounded-full flex items-center justify-center">
              <img
                src="src/assets/Images/image4.webp"
                alt="Team Lead"
                className="w-48 h-48 p-5 rounded-full object-cover"
              />
              <p className="absolute bottom-24 text-white text-lg text-center ">
                Lorem Ipsum
              </p>
            </div>

            {/* Circular Positioned Images */}
            <div className="absolute w-[350px] h-[350px]">
              {/* Top Image */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-28 h-28 rounded-full object-cover"
                />
                <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                  {teamMembers[0].name}
                </p>
              </div>

              {/* Top Left */}
              <div className="absolute top-10 left-12 transform -translate-x-1/2">
                <img
                  src={teamMembers[1].image}
                  alt={teamMembers[1].name}
                  className="w-28 h-28 rounded-full object-cover"
                />
                <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                  {teamMembers[1].name}
                </p>
              </div>

              {/* Top Right */}
              <div className="absolute top-10 right-12 transform translate-x-1/2">
                <img
                  src={teamMembers[2].image}
                  alt={teamMembers[2].name}
                  className="w-28 h-28 rounded-full object-cover"
                />
                <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                  {teamMembers[2].name}
                </p>
              </div>

              {/* Bottom Image */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <img
                  src={teamMembers[3].image}
                  alt={teamMembers[3].name}
                  className="w-28 h-28 rounded-full  object-cover"
                />
                <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                  {teamMembers[3].name}
                </p>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-10 left-12 transform -translate-x-1/2">
                <img
                  src={teamMembers[4].image}
                  alt={teamMembers[4].name}
                  className="w-28 h-28 rounded-full  object-cover"
                />
                <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                  {teamMembers[4].name}
                </p>
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-10 right-12 transform translate-x-1/2">
                <img
                  src={teamMembers[5].image}
                  alt={teamMembers[5].name}
                  className="w-28 h-28 rounded-full object-cover"
                />
                <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                  {teamMembers[5].name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TeamMembers
