import React, { useState } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import HomeBanner from "../../components/Banner/HomeBanner";
import Testimonial from "../../components/Testimonial/Testimonial";
import Services from "../../components/Services/Services";
import TeamMembers from "../../components/Team/TeamMembers";
import CompanyTestimonial from "../../components/Testimonial/CompanyTestimonial";

const Home = () => {
  return (
    <>
      {/* hero */}
      <HomeBanner title1={"Your"} title2={"Search  ends"} title3={"here"} description={"Web Development with Social Swirl"} btn1={"Hire us now"} btn2={"Join us now"} />

      {/* About us */}
      <AboutUs />

      {/* Services social-swirl provided */}
      <Services />

      {/* teamMembers */}
      <TeamMembers/>

      {/* TESTIMONIAL */}
      <Testimonial />

      {/* CompanyTestimonials */}
      <CompanyTestimonial />
    </>
  );
};

export default Home;
