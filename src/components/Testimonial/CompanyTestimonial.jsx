import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { companytestimonials } from "./companytestimonials"


const CompanyTestimonial = () => {
  return (
    <div className=" h-[60vh] flex flex-col max-md:justify-start max-md:h-max items-center justify-center p-4 max-md:py-10 max-md:mt-4 md:my-10">
    <h1 className="text-3xl md:text-4xl font-bold mb-8 lg:mb-20 lg:-m-40 text-center">
      What Companies Say about us
    </h1>
    <Swiper
      modules={[Pagination, Autoplay]}  // Use Autoplay module
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 1500 }}
      pagination={{ clickable: true }}
      breakpoints={{
        768: {
          slidesPerView: 3, 
          spaceBetween: 30,
        },
      }}
      className="max-w-6xl w-full "
    >
      {companytestimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className='space-y-5'>
          <div className="flex flex-col items-center text-center max-lg:h-64 lg:mb-16">
            <img
              src={testimonial.logo}
              alt={`${testimonial.name} logo`}
              className="w-16 h-16 mb-4 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
            <h2 className="text-xl font-semibold mb-2">{testimonial.name}</h2>
            <p className="text-sm max-lg:text-[14px]">{testimonial.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  
  </div>
  )
}

export default CompanyTestimonial
