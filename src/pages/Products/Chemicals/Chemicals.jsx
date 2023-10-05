import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { NavLink } from "react-router-dom";
import "./chemical.css";
import "./searchbar.css";
import Card from "../../../components/Card/Card";
import SearchInput from "../../../components/SearchInput/SearchInput";
import {
  polymers,
  solvents,
  chemicalsAndIntermediates,
  specialityChemicals,
} from "../../../data/chemicalsdata";

const Chemical = () => {
  const [query, setQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <main id="main">
        <div className="hero">
          <div className="hero_bg">
            <div
              className="breadcrums container aos-init aos-animate"
              data-aos="fade"
            >
              <h2 className="breadcrums_title">Chemicals</h2>
              <ol className="breadcrums_subtitle">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrums_items">/ Chemicals</li>
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
                  src="./assets/images/icons/polymer.png"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Polymer</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="./assets/images/icons/chemistry.png"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Solvents</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="./assets/images/icons/beaker.png"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">Chemicals & Intermediated</h2>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="d-flex sm_flex_col align-items-center justify-content-center">
                <img
                  src="./assets/images/icons/oil-barrel.png"
                  alt=""
                  width="80px"
                />
                <div>
                  <h2 className="ps-3">
                    Speciality <br /> Chemicals
                  </h2>
                </div>
              </div>{" "}
            </div>
          </div>
          {/* search input component */}
          <SearchInput onChange={handleSearchInputChange} />
        </div>

        <div id="about">
          <div id="polymers" className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Polymers</h3>
              <p>
                Discover top-quality polymers at Bhagirath BVM Grand. As leading
                suppliers, we provide a wide range of innovative polymer
                solutions. Our commitment to excellence ensures industries
                receive premium-grade materials, promoting efficiency and
                sustainability. Partner with us for all your polymer needs,
                driving progress through advanced chemical solutions.
              </p>
            </header>

            <div className="row about-cols">
              {polymers
                .filter((val) =>
                  val.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((val) => {
                  return (
                    <Card
                      img={val.img}
                      title={val.title}
                      cas={val.cas}
                      formula={val.formula}
                      othernames={val.othernames}
                    />
                  );
                })}
            </div>
          </div>
          <div id="solvents" className="container" data-aos="fade-up">
            <header className="section-header pt-5">
              <h3>Solvents</h3>
              <p>
                Bhagirath BVM Grand stands as a global leader in providing
                high-quality solvents, essential chemicals powering various
                industries worldwide. Our comprehensive range ensures unmatched
                purity, making them ideal for pharmaceuticals, paints, and
                manufacturing processes. With a commitment to excellence, we
                supply solvents globally, meeting diverse industrial needs.
                Count on us for reliable sourcing, exceptional quality, and
                seamless deliveries, driving your business towards unparalleled
                success.
              </p>
            </header>

            <div className="row about-cols">
              {solvents
                .filter((val) =>
                  val.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((val) => {
                  return (
                    <Card
                      img={val.img}
                      title={val.title}
                      cas={val.cas}
                      formula={val.formula}
                      othernames={val.othernames}
                    />
                  );
                })}
            </div>
          </div>
          <div id="intermediates" className="container" data-aos="fade-up">
            <header className="section-header pt-5">
              <h3>
                {" "}
                Chemicals And <br /> Intermediates
              </h3>
              <p>
                At Bhagirath BVM Grand, we redefine industry standards by
                supplying top-notch Chemicals and Intermediates globally. Our
                commitment to quality ensures businesses receive premium-grade
                materials, fostering innovation and sustainable practices.
                Partner with us for reliable, cutting-edge solutions, driving
                progress and excellence across the global chemical landscape.
              </p>
            </header>

            <div className="row about-cols">
              {chemicalsAndIntermediates
                .filter((val) =>
                  val.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((val) => {
                  return (
                    <Card
                      img={val.img}
                      title={val.title}
                      cas={val.cas}
                      formula={val.formula}
                      othernames={val.othernames}
                    />
                  );
                })}
            </div>
          </div>
          <div
            id="speciality_chemicals"
            className="container"
            data-aos="fade-up"
          >
            <header className="section-header pt-5">
              <h3>SPECIALITY CHEMICALS</h3>
              <p>
                Speciality Chemicals form the cornerstone of Bhagirath BVM
                Grand's global excellence. As pioneers in the industry, we offer
                a diverse array of high-quality, specialized chemical solutions.
                Committed to innovation and sustainability, our globally
                supplied products empower businesses across sectors. Partner
                with us for unmatched expertise, ensuring your ventures prosper
                with cutting-edge chemical innovations.
              </p>
            </header>

            <div className="row about-cols">
              {specialityChemicals
                .filter((val) =>
                  val.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((val) => {
                  return (
                    <Card
                      img={val.img}
                      title={val.title}
                      cas={val.cas}
                      formula={val.formula}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Chemical;
