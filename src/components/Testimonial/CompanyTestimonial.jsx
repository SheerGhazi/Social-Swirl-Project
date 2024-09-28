import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { companytestimonials } from "./companytestimonials"


const CompanyTestimonial = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-4 md:my-10">
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
  )
}

export default CompanyTestimonial
