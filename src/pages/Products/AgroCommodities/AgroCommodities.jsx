import React from "react";
import LeftContent from "../../../components/Products_Cards/LeftContent";
import RightContent from "../../../components/Products_Cards/RightContent";
import productsData from "../../../data/productsdata";
import "./agro.css";
import { Link } from "react-router-dom";
const AgroCommodities = () => {
  const data = productsData.agroCommodities;
  return (
    <>
      <main id="main">
        <div className="hero">
          <div className="hero_bg bg_img5">
            <div
              className="breadcrums container aos-init aos-animate"
              data-aos="fade"
            >
              <h2 className="breadcrums_title">Agro Commodities</h2>
              <ol className="breadcrums_subtitle">
                <li>
                  <Link style={{ color: "white" }} to="/">
                    Home
                  </Link>
                </li>
                <li style={{ color: "#5ca595" }} className="breadcrums_items">
                  / Agro Commodities
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
                  src="../assets/images/icons/Agro Commodities/rice.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Rice</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Agro Commodities/soybean.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Soyabean</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Agro Commodities/wheat.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Wheat</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Agro Commodities/sugar.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">
                    Sugar
                  </h2>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>

        <div id="agro_commodities" className="container" data-aos="fade-up">
          <header className="section-header">
            <h3>Products We Serves</h3>
            <p>
              Discover top-quality polymers at Bhagirath BVM Grand. As leading
              suppliers, we provide a wide range of innovative polymer
              solutions. Our commitment to excellence ensures industries receive
              premium-grade materials, promoting efficiency and sustainability.
              Partner with us for all your polymer needs, driving progress
              through advanced chemical solutions.
            </p>
          </header>
          <LeftContent
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
          />
        </div>
      </main>
    </>
  );
};

export default AgroCommodities;

// agroCommodities
