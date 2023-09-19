import React, { useEffect } from 'react'
// import { Swiper, SwiperSlide } from '../../../node_modules/swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './carousel.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import  { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../../src/assets/images/img_1.jpg';
import slide_image_2 from '../../../src/assets/images/img_2.jpg';
import slide_image_3 from '../../../src/assets/images/img_3.jpg';
import slide_image_4 from '../../../src/assets/images/img_4.jpg';
import slide_image_5 from '../../../src/assets/images/img_5.jpg';
import slide_image_6 from '../../../src/assets/images/img_6.jpg';
import slide_image_7 from '../../../src/assets/images/img_7.jpg';
import slide_image_8 from '../../../src/assets/images/img_8.jpg';
import slide_image_9 from '../../../src/assets/images/img_9.jpg';

const preloadImages = () => {
  const images = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7,
    slide_image_8,
    slide_image_9,
    // Add all image paths here
  ];

  images.forEach((image) => {
    new Image().src = image;
  });
};

function Carousel() {
    useEffect(() => {
        preloadImages();
      }, []);
      return (
        <div className="container container_for_swiper section-header">
          <h3 className="">Products  We <br/> Serves</h3>
          <Swiper
            // effect="slide"
            lazy={true}
            speed={500}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            allowTouchMove={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={slide_image_1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_6} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_7} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_8} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_9} alt="slide_image" />
            </SwiperSlide>
    
    
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                <i class="bi bi-arrow-left-circle-fill"></i>
              </div>
              <div className="swiper-button-next slider-arrow">
                {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                <i class="bi bi-arrow-right-circle-fill"></i>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      );
}

export default Carousel;