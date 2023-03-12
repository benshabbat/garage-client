import React from "react";
import Home from "../home/Home";
import Reviews from "../../components/reviews/Reviews";
import Address from "../../components/address/Address";
import About from "../../components/about/About";
import ServicesLanding from "../../components/servicesLanding/ServiceLanding";
import Contact from "../../components/contact/Contact";
import "./pageLanding.css";
const PageLanding = () => {
  return (
    <>
      <Home />
      <Reviews />
      <Address />
      <About />
      <ServicesLanding />
      <Contact />
    </>
  );
};

export default PageLanding;
