import React from "react";
import "./servicecard.css";
const ServiceCard = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div className="card">
          <div className="card-img service-image-container">
            <img
              src={props.img}
              loading="lazy"
              alt="services"
              className="img-fluid"
            />
          </div>
          <div className="p-3">
            <h5 className="card-title mt-4 ps-3 color-section">{props.title}</h5>
            <p className="card-text m-3 color-section-desc">{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
