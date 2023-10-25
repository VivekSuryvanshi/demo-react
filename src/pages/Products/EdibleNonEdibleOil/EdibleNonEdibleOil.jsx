import React from "react";
import { Link } from "react-router-dom";
const EdibleNonEdibleOil = () => {
  return (
    <>
      <main id="main">
        <div className="hero">
          <div className="hero_bg bg_img6">
            <div
              className="breadcrums container aos-init aos-animate"
              data-aos="fade"
            >
              <h2 className="breadcrums_title">Edible & Non-Edible Oils</h2>
              <ol className="breadcrums_subtitle">
                <li>
                  <Link style={{ color: "white" }} to="/">
                    Home
                  </Link>
                </li>
                <li style={{ color: "#5ca595" }} className="breadcrums_items">
                  / Edible & Non-Edible Oils
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
                  src="../assets/images/icons/Edible & Non Edible Oil (Crude)/webp image/Groundnut Oil.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Groundnut Oil</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Edible & Non Edible Oil (Crude)/webp image/Soybean Oil.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Soyabean Oil</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Edible & Non Edible Oil (Crude)/webp image/Castor oil.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Castor oil</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="../assets/images/icons/Edible & Non Edible Oil (Crude)/webp image/Sunflower oil.webp"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Sunflower Oil</h2>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>

  
      </main>
    </>
  );
};

export default EdibleNonEdibleOil;



