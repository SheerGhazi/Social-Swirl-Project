
import React, { useState } from "react";
import { SiWebauthn, SiCivicrm } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { BiSolidBusiness } from "react-icons/bi";
import { GrServices, GrOptimize } from "react-icons/gr";
import { CiShoppingCart } from "react-icons/ci";

const services = [
    {
      title: "Web Development",
      icon: <SiWebauthn />,
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
    },
    {
      title: "SEO Optimization",
      icon: <GrOptimize />,
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
    },
    {
      title: "Designing",
      icon: <MdOutlineDesignServices />,
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
    },
    {
      title: "Digital Marketing",
      icon: <LiaDigitalTachographSolid />,
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
    },
    {
      title: "Business website",
      icon: <BiSolidBusiness />,
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
    },
    {
      title: "Consulting Services",
      icon: <GrServices />,
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
    },
    {
      title: "CRM Solution",
      icon: <SiCivicrm />,
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
    },
    {
      title: "E-Commerce Solution",
      icon: <CiShoppingCart />,
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
    },
  ];

  
const opportunities = [
    {
      title: "Web Development",
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
      details:
        "Web development involves creating and maintaining websites. It encompasses aspects such as web design, web publishing, web programming, and database management.",
    },
    {
      title: "Designing",
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
      details:
        "Designing in the digital realm covers various aspects like graphic design, user interface (UI) design, user experience (UX) design, and more. It's about creating visually appealing and functional designs.",
    },
    {
      title: "SEO Optimization",
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
      details:
        "SEO optimization involves improving a website's visibility in search engine results. This includes techniques like keyword optimization, link building, and content strategy.",
    },
    {
      title: "Business Website",
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
      details:
        "A business website is a crucial online presence for companies. It serves as a digital storefront, providing information about products or services, and often includes features like e-commerce capabilities.",
    },
    {
      title: "Digital Marketing",
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
      details:
        "Digital marketing encompasses all marketing efforts that use electronic devices or the internet. This includes social media marketing, email marketing, content marketing, and more.",
    },
    {
      title: "CRM Solution",
      description: "Lorem Ipsum es simplemente el texto de relleno de las",
      details:
        "CRM (Customer Relationship Management) solutions help businesses manage interactions with current and potential customers. These systems streamline processes, improve customer service, and increase profitability.",
    },
  ];

  const ServiceCard = ({ title, icon, description }) => (
    <div className="flex items-start space-x-2 mb-4">
      <span className="text-blue-400 text-4xl">{icon}</span>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
  

const Services = () => {
    const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  return (
    <div className="bg-gradient-to-b from-sky-100 via-white to-sky-100">
        {/* ServiceCard */}
        <div className="container mx-auto px-20 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            From Idea to Completion, we bring Full-Stack
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Social Swirl, founded by Danial Khan in 2022, is a dynamic software
            company based in the United Kingdom.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        {/* CurrentOpportunity */}
        <div className="container mx-auto px-4 md:px-10 lg:px-20 py-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8">
            Current Opportunities
          </h1>
          <div className="flex flex-col lg:flex-row bg-white">
            <div className="w-full lg:w-3/5 p-4 md:p-6 lg:p-10">
              {opportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="mb-4 pb-4 border-b border-gray-300 last:border-b-0"
                >
                  <div className="flex justify-between items-center">
                    <h2
                      className="text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer hover:text-blue-600"
                      onClick={() => setSelectedOpportunity(opportunity)}
                    >
                      {opportunity.title}
                    </h2>
                    <button className="bg-blue-500 text-white px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs md:text-sm lg:text-base">
                      APPLY NOW
                    </button>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm md:text-base lg:text-lg">
                    {opportunity.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-2/5 lg:mt-0">
              <div className="h-64 md:h-80 lg:h-full p-4 md:p-6 relative overflow-hidden">
                {selectedOpportunity ? (
                  <div className="absolute inset-0 flex items-center justify-center text-white p-6 lg:px-10">
                    <p className="text-sm md:text-base lg:text-lg">
                      {selectedOpportunity.details}
                    </p>
                  </div>
                ) : null}
                <img
                  src="src/assets/Images/A7.jpg"
                  alt="Technology background"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services
