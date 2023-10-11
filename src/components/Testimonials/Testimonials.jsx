import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./testimonials.css";

// import required modules
import { EffectCards } from "swiper";
// swiper/modules

const Testimonials = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="testimonialSwiper"
      >
        <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          <div class="testimonials">
            <div class="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-1.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Vihaan Singh</h3>
              <h4>Ceo &amp; Founder</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div class="testimonials">
            <div class="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-2.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Rahul Dubey</h3>
              <h4>Manager (TCS)</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div class="testimonials">
            <div class="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-3.webp"
                class="testimonial-img"
                alt=""
              />
              <h3>Gurneet Kaur</h3>
              <h4>Ceo &amp; Founder</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div class="testimonials">
            <div class="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-4.jpg"
                class="testimonial-img"
                alt=""
              />
              <h3>Andrew Symonds</h3>
              <h4>Delivery Manager</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div class="testimonials">
            <div class="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-5.jpg"
                class="testimonial-img"
                alt=""
              />
              <h3>Mrs. Shruti Singh</h3>
              <h4>Ceo &amp; Founder</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div class="testimonials">
            <div class="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-6.jpg"
                class="testimonial-img"
                alt=""
              />
              <h3>Simran Kaur</h3>
              <h4>HR & manager</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div class="testimonials">
            <div class="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-7.jpg"
                class="testimonial-img"
                alt=""
              />
              <h3>Shubham Sharma</h3>
              <h4>CTO & Manager</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide className="testimonialSwiperSlide  SwiperSlide">
          {" "}
          <div class="testimonials">
            <div class="testimonial-item">
              <img
                src="./assets/images/testimonials/testi-8.jpg"
                class="testimonial-img"
                alt=""
              />
              <h3>Mr. Vivek Suryvanshi</h3>
              <h4>Team Lead</h4>
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p>
                <i class="bi bi-quote quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testimonials;
