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
      <HomeBanner />

      {/* About us */}
      <AboutUs />

      {/* Company Testimonials */}
      <Services />

      {/* teamMembers */}
      <TeamMembers />

      {/* TESTIMONIAL */}
      <Testimonial />

      {/* CompanyTestimonials */}
      <CompanyTestimonial />
    </>
  );
};

export default Home;
