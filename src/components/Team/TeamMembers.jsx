import React from "react";
import TeamMember1 from "../../assets/Images/TeamMember1.png"

const teamMember = [
  { name: "Haider", image: "src/assets/Images/image4.webp" },
  { name: "2Lorem Ipsum", image: "src/assets/Images/image4.webp" },
  { name: "3Lorem Ipsum", image: "src/assets/Images/image4.webp" },
  { name: "4Lorem Ipsum", image: "src/assets/Images/image4.webp" },
  { name: "5Lorem Ipsum", image: "src/assets/Images/image4.webp" },
  { name: "6Lorem Ipsum", image: "src/assets/Images/image4.webp" },
];

// import { teamMember } from "./teamMember"; // Ensure the path is correct


const TeamMembers = () => {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-[#c5f5f7] py-20 px-3 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 lg:ml-24">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl font-semibold text-[#52CAFA] mb-2">
            MERN Stack Developer
          </p>
          <p className=" mb-6 text-[#494848]">
            Social Swirl, founded by Danial Khan in 2022, is a dynamic software.
          </p>
          <ul className="list-none text-black text-lg md:text-xl font-semibold space-y-4" >
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
          <div className="relative w-96 h-96 border-2 border-black rounded-full flex items-center justify-center">
            <img
              src={TeamMember1}
              alt="Team Lead"
              className="w-48 h-48 p-5 rounded-full object-cover"
            />
            <p className="absolute bottom-24 text-white text-lg text-center ">
              Lorem Ipsum
            </p>
          </div>

          {/* Circular Positioned Images */}
          <div className="absolute w-[430px] h-[430px]">
            {/* Top Image */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <img
                src={teamMember[0].image}
                alt={teamMember[0].name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                {teamMember[0].name}
              </p>
            </div>

            {/* Top Left */}
            <div className="absolute top-10 left-12 transform -translate-x-1/2">
              <img
                src={teamMember[1].image}
                alt={teamMember[1].name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                {teamMember[1].name}
              </p>
            </div>

            {/* Top Right */}
            <div className="absolute top-10 right-12 transform translate-x-1/2">
              <img
                src={teamMember[2].image}
                alt={teamMember[2].name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                {teamMember[2].name}
              </p>
            </div>

            {/* Bottom Image */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
              <img
                src={teamMember[3].image}
                alt={teamMember[3].name}
                className="w-32 h-32 rounded-full  object-cover"
              />
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                {teamMember[3].name}
              </p>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-10 left-12 transform -translate-x-1/2">
              <img
                src={teamMember[4].image}
                alt={teamMember[4].name}
                className="w-32 h-32 rounded-full  object-cover"
              />
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                {teamMember[4].name}
              </p>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-10 right-12 transform translate-x-1/2">
              <img
                src={teamMember[5].image}
                alt={teamMember[5].name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center ">
                {teamMember[5].name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
