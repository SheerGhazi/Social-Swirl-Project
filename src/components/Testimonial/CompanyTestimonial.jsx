import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


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

const CompanyTestimonial = () => {
  return (
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
  )
}

export default CompanyTestimonial
