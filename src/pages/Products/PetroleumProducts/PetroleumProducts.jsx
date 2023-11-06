import React from "react";
import { Link } from "react-router-dom";
import LeftContent from "../../../components/Products_Cards/LeftContent";
import RightContent from "../../../components/Products_Cards/RightContent";
import productsData from "../../../data/productsdata";

const PetroleumProducts = () => {
  const data = productsData.petroleumAndOilProducts;
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
          {/* new code */}
          <div class="timeline container col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-12">
            <LeftContent
              title={data[0].title}
              desc={data[0].desc}
              icon={data[0].icon}
              image={data[0].image}
              properties={data[0].properties}
            />
            <RightContent
              title={data[1].title}
              desc={data[1].desc}
              icon={data[1].icon}
              image={data[1].image}
              properties={data[1].properties}
            />
            <LeftContent
              title={data[2].title}
              desc={data[2].desc}
              icon={data[2].icon}
              image={data[2].image}
              properties={data[2].properties}
            />
            <RightContent
              title={data[3].title}
              desc={data[3].desc}
              icon={data[3].icon}
              image={data[3].image}
              properties={data[3].properties}
            />
            <LeftContent
              title={data[4].title}
              desc={data[4].desc}
              icon={data[4].icon}
              image={data[4].image}
              properties={data[4].properties}
            />
            <RightContent
              title={data[5].title}
              desc={data[5].desc}
              icon={data[5].icon}
              image={data[5].image}
              properties={data[5].properties}
            />
            <LeftContent
              title={data[6].title}
              desc={data[6].desc}
              icon={data[6].icon}
              image={data[6].image}
              properties={data[6].properties}
            />
            <RightContent
              title={data[7].title}
              desc={data[7].desc}
              icon={data[7].icon}
              image={data[7].image}
              properties={data[7].properties}
            />
            <LeftContent
              title={data[8].title}
              desc={data[8].desc}
              icon={data[8].icon}
              image={data[8].image}
              properties={data[8].properties}
            />
            <RightContent
              title={data[9].title}
              desc={data[9].desc}
              icon={data[9].icon}
              image={data[9].image}
              properties={data[9].properties}
            />
            <LeftContent
              title={data[10].title}
              desc={data[10].desc}
              icon={data[10].icon}
              image={data[10].image}
              properties={data[10].properties}
            />
            <RightContent
              title={data[11].title}
              desc={data[11].desc}
              icon={data[11].icon}
              image={data[11].image}
              properties={data[11].properties}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default PetroleumProducts;
