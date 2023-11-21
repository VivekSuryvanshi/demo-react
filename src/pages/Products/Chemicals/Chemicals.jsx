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
import { Link } from "react-router-dom";

const Chemical = () => {
  const [query, setQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <main id="main">
        <div className="hero">
          <div className="hero_bg bg_img1">
            <div
              className="breadcrums container aos-init aos-animate"
              data-aos="fade"
            >
              <h2 className="breadcrums_title">Chemicals</h2>
              <ol className="breadcrums_subtitle">
                <li >
                  <Link style={{color:'white'}} to="/">Home</Link>
                </li>
                <li style={{color:'#5ca595'}} className="breadcrums_items">/ Chemicals</li>
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
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
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
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6 sm_pd_top">
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
              When it comes to sourcing reliable and consistently high-quality polymers, we are the go-to polymer supplier for businesses across various industries. Whether you need polymers for packaging, manufacturing, or any other purpose, you can trust us to provide the materials that meet your exact specifications.
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
              We specialise in providing solvents that are not only pure but also highly effective. When you choose our solvents, you can rest assured that your production processes will run smoothly and efficiently. We understand the importance of precision when it comes to solvents, and we deliver on that promise.
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
              We offer a comprehensive range of chemicals and intermediates that are designed to meet the ever-evolving demands of various industries. Our products undergo rigorous quality checks to ensure they are of the highest standard. When you partner with us, you can count on our products to support your processes effectively and efficiently.

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
              We are dedicated to providing high-quality solutions that not only meet but also exceed your expectations. Our specialty chemicals are designed to enhance your product formulations, giving you the competitive edge you need in a constantly evolving market. When you choose our specialty chemicals, you're choosing innovation and reliability.
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
