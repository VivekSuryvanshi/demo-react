import React from "react";
import "./servicecard.css";
const ServiceCard = (props) => {
  return (
    <>
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div class="card">
          <div class="card-img service-image-container">
            <img
              src={props.img}
              loading="lazy"
              alt="services"
              class="img-fluid"
            />
          </div>
          <div className="p-3">
            <h5 class="card-title mt-4 ps-3 color-section">{props.title}</h5>
            <p class="card-text m-3 color-section-desc">{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
