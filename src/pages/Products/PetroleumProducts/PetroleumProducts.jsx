import React from 'react';
import { Link } from 'react-router-dom';

const PetroleumProducts = () => {
  return (
    <>
    <main id="main">
      <div className="hero">
        <div className="hero_bg bg_img7">
          <div
            className="breadcrums container aos-init aos-animate"
            data-aos="fade"
          >
            <h2 className="breadcrums_title">Petroleum & Oil Products</h2>
            <ol className="breadcrums_subtitle">
              <li>
                <Link style={{ color: "white" }} to="/">
                  Home
                </Link>
              </li>
              <li style={{ color: "#5ca595" }} className="breadcrums_items">
                / Petroleum & Oil Products
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="input_box">
        {/* icon category section */}
        <div className="icons_section row container d-flex align-items-center">
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
            <div className="d-flex sm_flex_col align-items-center justify-content-center">
              <img
                src="../assets/images/icons/Petroleum & Oil Products/Aviation fuel jet fuel.webp"
                alt=""
                width="80px"
              />
              <div>
                <h2 className="ps-3">Aviation Fuel</h2>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
            <div className="d-flex sm_flex_col align-items-center justify-content-center">
              <img
                src="../assets/images/icons/Petroleum & Oil Products/D2 gas oil.webp"
                alt=""
                width="80px"
              />
              <div>
                <h2 className="ps-3">D2 Gas Oil</h2>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
            <div className="d-flex sm_flex_col align-items-center justify-content-center">
              <img
                src="../assets/images/icons/Petroleum & Oil Products/D6 diesel bukder fuel.webp"
                alt=""
                width="80px"
              />
              <div>
                <h2 className="ps-3">D6 Diesel Fuel</h2>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
            <div className="d-flex sm_flex_col align-items-center justify-content-center">
              <img
                src="../assets/images/icons/Petroleum & Oil Products/En-590 diesel ulsd.webp"
                alt=""
                width="80px"
              />
              <div>
                <h2 className="ps-3">EN-590 Diesel </h2>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      <div id="agro_commodities" className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Products We Serves</h3>
          <p className="col-lg-10 col-12 mx-auto">
            Discover top-quality polymers at Bhagirath BVM Grand. As leading
            suppliers, we provide a wide range of innovative polymer
            solutions. Our commitment to excellence ensures industries receive
            premium-grade materials, promoting efficiency and sustainability.
            Partner with us for all your polymer needs, driving progress
            through advanced chemical solutions.
          </p>
        </header>
        {/* <LeftContent
          title={data[0].title}
          desc={data[0].desc}
          image={data[0].image}
          properties={data[0].properties}
        />
        <RightContent
          title={data[1].title}
          desc={data[1].desc}
          image={data[1].image}
          properties={data[1].properties}
        />
        <LeftContent
          title={data[2].title}
          desc={data[2].desc}
          image={data[2].image}
          properties={data[2].properties}
        />
        <RightContent
          title={data[3].title}
          desc={data[3].desc}
          image={data[3].image}
          properties={data[3].properties}
        />
        <LeftContent
          title={data[4].title}
          desc={data[4].desc}
          image={data[4].image}
          properties={data[4].properties}
        />
        <RightContent
          title={data[5].title}
          desc={data[5].desc}
          image={data[5].image}
          properties={data[5].properties}
        /> */}

        {/* new code */}
        <div class="timeline container col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-12">
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 container_part left_container order-last order-lg-first">
                <div class="animated_icon_div">
                  <img
                    class="animated_icon img-fluid"
                    src="../assets/images/icons/Petroleum & Oil Products/Aviation fuel jet fuel.webp"
                    alt="product_images"
                  />
                </div>
                <div class="text_box">
                  <h2 class="text_card">AVIATION FUEL</h2>
                  <p class="product_desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 d-flex align-items-center justify-content-end order-lg-last order-first">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/Aviation fuel.webp"
                  alt=""
                  class="col-lg-10 col-11 img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 product_container container_part d-flex align-items-center">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/d2 gas oil.webp"
                  class="col-lg-10 col-11 img-fluid"
                  alt="product_images"
                />
                <div class="animated_icon_div">
                  <img
                    class="animated_icon"
                    src="../assets/images/icons/Petroleum & Oil Products/D2 gas oil.webp"
                    alt="product_images"
                  />
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 right_container">
                <div class="text_box">
                  <h2 class="text_card">D2 GAS OIL</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 container_part left_container order-last order-lg-first">
                <div class="animated_icon_div">
                  <img
                    class="animated_icon"
                    src="../assets/images/icons/Petroleum & Oil Products/D6 diesel bukder fuel.webp"
                    alt="product_images"
                  />
                </div>
                <div class="text_box">
                  <h2 class="text_card">D6 Diesel Fuel</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 d-flex align-items-center product_container justify-content-end order-lg-last order-first">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/d6 dieseil bunker oil.webp"
                  alt=""
                  class="col-lg-10 col-11 img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 container_part d-flex align-items-center product_container">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/en-590 diesel ulsd.webp"
                  alt=""
                  class="col-lg-10 col-11 img-fluid"
                />
                <div class="animated_icon_div">
                  <img
                    class="animated_icon"
                    src="../assets/images/icons/Petroleum & Oil Products/En-590 diesel ulsd.webp"
                    alt="product_images"
                  />
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 right_container">
                <div class="text_box">
                  <h2 class="text_card">EN-590 DIESEL</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 container_part left_container order-last order-lg-first">
                <div class="animated_icon_div">
                  <img
                    class="animated_icon"
                    src="../assets/images/icons/Petroleum & Oil Products/fuel oil.webp"
                    alt="product_images"
                  />
                </div>
                <div class="text_box">
                  <h2 class="text_card">FUEL OIL</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 d-flex align-items-center justify-content-end">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/fuel oil.webp"
                  class="col-lg-10 col-11 img-fluid"
                  alt="product_images"
                />
              </div>
            </div>
          </div>
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 container_part d-flex align-items-center product_container">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/crude oil.webp"
                  class="col-lg-10 col-11 img-fluid"
                  alt="product_images"
                />
                <div class="animated_icon_div">
                  <img
                    class="animated_icon"
                    src="../assets/images/icons/Petroleum & Oil Products/Crude oil.webp"
                    alt="product_images"
                  />
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 right_container">
                <div class="text_box">
                  <h2 class="text_card">CRUDE OIL</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>0
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 container_part left_container order-last order-lg-first">
                <div class="animated_icon_div">
                  <img
                    class="animated_icon"
                    src="../assets/images/icons/Petroleum & Oil Products/mazut.webp"
                    alt="product_images"
                  />
                </div>
                <div class="text_box">
                  <h2 class="text_card">MAZUT</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 d-flex align-items-center justify-content-end">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/mazut.webp"
                  class="col-lg-10 col-11 img-fluid"
                  alt="product_images"
                />
              </div>
            </div>
          </div>
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 container_part d-flex align-items-center product_container">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/liquefied petroleum gas.webp"
                  class="col-lg-10 col-11 img-fluid"
                  alt="product_images"
                />
                <div class="animated_icon_div">
                  <img
                    class="animated_icon"
                    src="../assets/images/icons/Petroleum & Oil Products/Liquefied Petroleum Gas.webp"
                    alt="product_images"
                  />
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 right_container">
                <div class="text_box">
                  <h2 class="text_card">LIQUIFIED PETROLEUM GAS</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>0
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 container_part left_container order-last order-lg-first">
                <div class="animated_icon_div">
                  <img
                    class="animated_icon"
                    src="../assets/images/icons/Petroleum & Oil Products/liquefied natural gas.webp"
                    alt="product_images"
                  />
                </div>
                <div class="text_box">
                  <h2 class="text_card">LIQUIFIED NATURAL GAS</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 d-flex align-items-center justify-content-end">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/liquefied natural gas.webp"
                  class="col-lg-10 col-11 img-fluid"
                  alt="product_images"
                />
              </div>
            </div>
          </div>
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 container_part d-flex align-items-center product_container">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/petroleum coke.webp"
                  class="col-lg-10 col-11 img-fluid"
                  alt="product_images"
                />
                <div class="animated_icon_div">
                  <img
                    class="animated_icon"
                    src="../assets/images/icons/Petroleum & Oil Products/coal.webp"
                    alt="product_images"
                  />
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 right_container">
                <div class="text_box">
                  <h2 class="text_card">PETROLEUM COKE</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>0
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 container_part left_container order-last order-lg-first">
                <div class="animated_icon_div">
                  <img
                    class="animated_icon"
                    src="../assets/images/icons/Petroleum & Oil Products/bitumen.webp"
                    alt="product_images"
                  />
                </div>
                <div class="text_box">
                  <h2 class="text_card">BITUMEN</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 d-flex align-items-center justify-content-end">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/bitumen.webp"
                  class="col-lg-10 col-11 img-fluid"
                  alt="product_images"
                />
              </div>
            </div>
          </div>
          <div class="container product_card">
            <div class="row">
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 z-n1 container_part d-flex align-items-center product_container">
                <img
                  src="../assets/images/Products-all-img/petroleum oil product/nephtha.webp"
                  class="col-lg-10 col-11 img-fluid"
                  alt="product_images"
                />
                <div class="animated_icon_div">
                  <img
                    class="animated_icon"
                    src="../assets/images/icons/Petroleum & Oil Products/nephtha.webp"
                    alt="product_images"
                  />
                </div>
              </div>
              <div class="col-xxl-6 col-xl-6 col-lg-6 col-12 right_container">
                <div class="text_box">
                  <h2 class="text_card">NAPHTHA</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis expedita aliquam, excepturi reprehenderit dolorum
                    suscipit. Ab quasi cumque corrupti libero.
                  </p>
                  <ul class="ul_list">
                    <li>
                      <i class="bi bi-check-lg"></i>0
                      Ullamco laboris nisi ut aliquip consequat
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      Lorem ipsum dolor sit, amet consectetur adipisicin
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      In dignissimos libero aliquid non illo
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      sint accusamus placeat molestias corporis!
                    </li>
                    <li>
                      <i class="bi bi-check-lg"></i>
                      voluptatum nesciunt ex architecto neque exerct.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default PetroleumProducts;