import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./testimonials.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
// swiper/modules

const Testimonials = () => {
  return (
    <>
      <div className="section-header pb-5">
        <h3>Client's Success Stories</h3>
      </div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[Autoplay, Pagination]}
        className="testimonialSwiper"
      >
        <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div className="testimonials">
            <div className="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-2.webp"
                className="testimonial-img"
                alt=""
              />
              <h3>Rahul Dubey</h3>
              <h4>Manager (TCS)</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div className="testimonials">
            <div className="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-3.webp"
                className="testimonial-img"
                alt=""
              />
              <h3>Gurneet Kaur</h3>
              <h4>Ceo &amp; Founder</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div className="testimonials">
            <div className="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-4.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Andrew Symonds</h3>
              <h4>Delivery Manager</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div className="testimonials">
            <div className="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-5.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Mrs. Shruti Singh</h3>
              <h4>Ceo &amp; Founder</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div className="testimonials">
            <div className="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-6.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Simran Kaur</h3>
              <h4>HR & manager</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div className="testimonials">
            <div className="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-7.jpg"
                className="testimonial-img"
                alt=""
              />
              <h3>Shubham Sharma</h3>
              <h4>CTO & Manager</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
