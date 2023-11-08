import React from "react";
import { Link } from "react-router-dom";
// import LeftContent from "../../../components/Products_Cards/LeftContent";
// import RightContent from "../../../components/Products_Cards/RightContent";
// import productsData from "../../../data/productsdata";

const BuildingMaterials = () => {
  // const data = productsData.bioFuels;
  return (
    <>
      <main id="main">
        <div className="hero">
          <div className="hero_bg bg_img12">
            <div
              className="breadcrums container aos-init aos-animate"
              data-aos="fade"
            >
              <h2 className="breadcrums_title">Building Materials</h2>
              <ol className="breadcrums_subtitle">
                <li>
                  <Link style={{ color: "white" }} to="/">
                    Home
                  </Link>
                </li>
                <li style={{ color: "#5ca595" }} className="breadcrums_items">
                  / Building Materials
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* <div className="input_box">
          <div className="icons_section row container d-flex align-items-center">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Bio Fuels/Bio diesel.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Bio Diesel</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Bio Fuels/Ethanol.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Ethanol</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Bio Fuels/Bio lng.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Bio LNG</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Bio Fuels/fatty acid.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Fatty Acids & Sterne</h2>
                </div>
              </div>
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
          <div class="timeline container col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-12">
            <div id={data[0].id}>
              <LeftContent
                title={data[0].title}
                desc={data[0].desc}
                icon={data[0].icon}
                image={data[0].image}
                properties={data[0].properties}
              />
            </div>
            <div id={data[1].id}>
              <RightContent
                title={data[1].title}
                desc={data[1].desc}
                icon={data[1].icon}
                image={data[1].image}
                properties={data[1].properties}
              />
            </div>
            <div id={data[2].id}>
              <LeftContent
                title={data[2].title}
                desc={data[2].desc}
                icon={data[2].icon}
                image={data[2].image}
                properties={data[2].properties}
              />
            </div>
            <div id={data[3].id}>
              <RightContent
                title={data[3].title}
                desc={data[3].desc}
                icon={data[3].icon}
                image={data[3].image}
                properties={data[3].properties}
              />
            </div>
            <div id={data[4].id}>
              <LeftContent
                title={data[4].title}
                desc={data[4].desc}
                icon={data[4].icon}
                image={data[4].image}
                properties={data[4].properties}
              />
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default BuildingMaterials;
