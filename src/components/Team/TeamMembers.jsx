import React, { useEffect, useState } from "react";
import TeamMember1 from "../../assets/Images/TeamMembers/TM6.png";

const teamMember = [
  { name: "Haider", designation: "MERN Stack Developer", image: "src/assets/Images/TeamMembers/TM1.png", discription: 'MERN is a pre-built technology stack based on JavaScript technologies. MERN stands for MongoDB, Express, React, and Node' },
  { name: "2Lorem Ipsum", designation: "Digital Marketer", image: "src/assets/Images/TeamMembers/TM2.png", discription: 'Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers' },
  { name: "Hammad", designation: "Graphic Designer", image: "src/assets/Images/TeamMembers/TM3.png", discription: 'Graphic designers are creative professionals who use their artistic skills to create visual content for various mediums.' },
  { name: "4Lorem Ipsum", designation: "Social Media Marketer", image: "src/assets/Images/TeamMembers/TM4.png", discription: 'Social media marketing is the use of social media platforms and websites to promote a product or service' },
  { name: "Awais", designation: "Sales Executive", image: "src/assets/Images/TeamMembers/TM5.png", discription: 'A Sales Executive, or Sales Manager, runs the sales departments of a business to offer goods and services to customers for profit' },
  { name: "6Lorem Ipsum", designation: "Senior SEO Developer", image: "src/assets/Images/TeamMembers/TM6.png", discription: 'A SEO developer is responsible for the on-page optimization of websites to improve their search engine rankings' },
];

const TeamMembers = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [discription, setDiscription] = useState(null);
  let [ImgHidden, setImgHidden] = useState('block')

  const handleMemberClick = (index, member) => {
    setSelectedMember(index);
    setDiscription(member.discription)
    setImgHidden('hidden')
    setTimeout(() => {
      setImgHidden('block');
      setDiscription(null)
    }, 4000);
  };
  
  return (
    <div className="bg-gradient-to-b from-sky-100 to-[#c5f5f7] py-20 px-3 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 md:px-10 md:pr-32 lg:ml-24">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl font-semibold text-[#52CAFA] mb-2">
            MERN Stack Developer
          </p>
          <p className=" mb-6 text-[#494848]">
            Social Swirl, founded by Danial Khan in 2022, is a dynamic software.
          </p>
          <ul className="list-none text-black text-lg  md:text-xl font-semibold space-y-4">
            {teamMember.map((member, index) => (
              <li
                key={index}
                onClick={() => handleMemberClick(index, member)}
                className={`cursor-pointer hover:text-primary  ${selectedMember === index ? "text-primary border-primary" : ""
                  }`}
              >
                {member.designation}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="hidden md:w-1/2 md:flex justify-center items-center mt-16 md:mt-0">
          {/* Center Image */}
          <div className="relative w-96 h-96 border-2 border-black rounded-full flex items-center justify-center">
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center  text-[14px]">
              {discription}
            </p>
          </div>

          {/* Circular Positioned Images */}
          <div className="absolute w-[430px] h-[430px]">
            {teamMember.map((member, index) => (
              <div
                key={index}
                className={`absolute  ${index === 0
                  ? "-top-6 left-1/2 transform -translate-x-1/2 "
                  : index === 1
                    ? "top-10 left-12 transform -translate-x-1/2"
                    : index === 2
                      ? "top-10 right-12 transform translate-x-1/2"
                      : index === 3
                        ? "-bottom-6 left-1/2 transform -translate-x-1/2"
                        : index === 4
                          ? "bottom-10 left-12 transform -translate-x-1/2"
                          : "bottom-10 right-12 transform translate-x-1/2"
                  }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-32 h-32 rounded-full cursor-pointer object-cover transition-transform duration-300 ease-in-out transform ${selectedMember === index
                    ? "scale-110 border-2 border-primary"
                    : `border-transparent ${ImgHidden}`

                    }`}
                />
                <p className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center  
                  ${selectedMember === index ? 'translate-y-[-10px] transition-transform duration-300 ease-in-out ' : `${ImgHidden}`}
                  
                  `} >
                  {member.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;


// {members.map((member, index) => (
//   <div key={index} className={`relative ${selectedMember === index ? "block" : "hidden"}`}>
//     <img
//       src={member.image}
//       alt={member.name}
//       className={`w-32 h-32 rounded-full cursor-pointer object-cover transition-transform duration-300 ease-in-out transform ${
//         selectedMember === index
//           ? "scale-110 border-2 border-primary"
//           : "border-transparent"
//       }`}
//       onClick={() => setSelectedMember(selectedMember === index ? null : index)} // Assuming you're using a state setter
//     />
//     <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs text-center">
//       {member.name}
//     </p>
//   </div>
// ))}
