import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "../../components/Testimonials/Testimonials";
import Faqs from "../../components/Faqs_section/Faq";

const Services = () => {
  return (
    <>
      <div className="hero_bg bg_img3">
        <div
          className="breadcrums container aos-init aos-animate"
          data-aos="fade"
        >
          <h2 className="breadcrums_title">Services</h2>
          <ol className="breadcrums_subtitle">
            <li>
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </li>
            <li style={{ color: "#5ca595" }} className="breadcrums_items">
              / Services
            </li>
          </ol>
        </div>
      </div>
      <Testimonials />
      <Faqs />
    </>
  );
};

export default Services;
