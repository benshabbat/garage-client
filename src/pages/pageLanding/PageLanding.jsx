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
    <div className="main">
      <Home />
      <Address />
      <About />
      <ServicesLanding />
      <Contact />
      <Reviews />
      <footer>
        Written By Menachem & DavidChen
      </footer>
    </div>
  );
};

export default PageLanding;
