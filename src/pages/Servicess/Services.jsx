import React from "react";
import { Link } from "react-router-dom";
import "./service.css";
import Testimonials from "../../components/Testimonials/Testimonials";
import Faqs from "../../components/Faqs_section/Faq";
import { ourservices } from "../../components/Card/servicedata";
import ServiceCard from "../../components/Card/ServiceCard";

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
      {/* <!-- ======= Featured Services Section ======= --> */}
      <section id="featured_services" className="featured_services">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
            >
              <div className="icon flex-shrink-0">
                <i className="fa-solid fa-cart-flatbed"></i>
              </div>
              <div>
                <h4 className="title">Quality Assurance</h4>
                <p className="description">
                   Quality is our hallmark. We rigorously inspect and verify products to ensure they meet the highest standards.
                </p>
                <Link href="#" className="readmore stretched-link">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon flex-shrink-0">
                <i className="fa-solid fa-truck"></i>
              </div>
              <div>
                <h4 className="title">Shipment</h4>
                <p className="description">
                We understand the importance of timely delivery. As soon as you place your order, our efficient shipping kicks into gear
                </p>
                <Link href="#" className="readmore stretched-link">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            {/* <!-- End Service Item --> */}

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon flex-shrink-0">
                <i className="fa-solid fa-truck-ramp-box"></i>
              </div>
              <div>
                <h4 className="title">Customised Solutions</h4>
                <p className="description">
                Our team tailors solutions to meet your specific needs, ensuring a seamless and efficient experience.
                </p>
                <Link href="#" className="readmore stretched-link">
                  <span>Learn More</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            {/* <!-- End Service Item --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Featured Services Section --> */}
      {/* services card section starts */}
      <section className="pb-5">
        <div className="container">
          <div className="section-header">
            <h3 className="mb-5 text-center">OUR SERVICES</h3>
          </div>
          <div className="row gy-4">
            {ourservices.map((val) => {
              return (
                <ServiceCard img={val.img} title={val.title} desc={val.desc} />
              );
            })}
          </div>
        </div>
      </section>
      <Testimonials />
      <Faqs />
    </>
  );
};

export default Services;
