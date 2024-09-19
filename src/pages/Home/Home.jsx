import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';        
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import AboutUs from "../../components/AboutUs/AboutUs";
import HomeBanner from "../../components/Banner/HomeBanner";
import Testimonial from "../../components/Testimonial/Testimonial";
import Services from "../../components/Services/Services";



const teamMembers = [
  { name: "1Lorem Ipsum", image: "src/assets/Images/image4.webp" },
  { name: "2Lorem Ipsum", image: "src/assets/Images/image4.webp" },
  { name: "3Lorem Ipsum", image: "src/assets/Images/image4.webp" },
  { name: "4Lorem Ipsum", image: "src/assets/Images/image4.webp" },
  { name: "5Lorem Ipsum", image: "src/assets/Images/image4.webp" },
  { name: "6Lorem Ipsum", image: "src/assets/Images/image4.webp" },
];
const companytestimonials = [
  {
    logo: "src/assets/Images/k.jpg",
    name: "DK Group",
    text: "Social Swirl's graphic design team exceeded expectations, bringing our brand to life with innovative designs. Thrilled with their work!"
  },
  {
    logo: "src/assets/Images/m.jpg",
    name: "Loja",
    text: "Social Swirl's social media team's strategic content and efficient management led to a strong online presence, boosting brand awareness and conversions. Impressive efforts!"
  },
  {
    logo: "src/assets/Images/careem.jpg",
    name: "Careem",
    text: "Social Swirl's back-end team excels in Python and Django, delivering robust infrastructure with quality and timeliness. A reliable choice!"
  },
  {
    logo: "src/assets/Images/k.jpg",
    name: "DK Group",
    text: "Social Swirl's graphic design team exceeded expectations, bringing our brand to life with innovative designs. Thrilled with their work!"
  },
  {
    logo: "src/assets/Images/m.jpg",
    name: "Loja",
    text: "Social Swirl's social media team's strategic content and efficient management led to a strong online presence, boosting brand awareness and conversions. Impressive efforts!"
  },
  {
    logo: "src/assets/Images/careem.jpg",
    name: "Careem",
    text: "Social Swirl's back-end team excels in Python and Django, delivering robust infrastructure with quality and timeliness. A reliable choice!"
  }
];


const Home = () => {
  
  return (
    <>
      {/* hero */}
      <HomeBanner/>

      {/* About us */}
     <AboutUs/>

      <Services/>

      {/* teamMembers */}
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

      {/* TESTIMONIAL */}
      <Testimonial/>
      
      {/* CompanyTestimonials */}
      <div className="bg-[#c5f5f7] min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 lg:mb-20 lg:-m-40 text-center">
        What Companies Say about us
      </h1>
      <Swiper
        modules={[Pagination, Autoplay]}  // Use Autoplay module
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 3,  // 3 slides on medium screens
            spaceBetween: 30,
          },
        }}
        className="max-w-6xl w-full "
      >
        {companytestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center text-center lg:mb-16">
              <img
                src={testimonial.logo}
                alt={`${testimonial.name} logo`}
                className="w-16 h-16 mb-4 rounded-full"
              />
              <h2 className="text-xl font-semibold mb-2">{testimonial.name}</h2>
              <p className="text-sm">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Home;
