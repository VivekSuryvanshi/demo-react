import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
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
  )
}

export default Services;