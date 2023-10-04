import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { NavLink } from "react-router-dom";
import "./chemical.css";
import "./searchbar.css";
import Card from "../components/Card/Card";
import {
  polymers,
  solvents,
  chemicalsAndIntermediates,
  specialityChemicals,
} from "../chemicalsdata";

const Polymer = () => {
  const [query, setQuery] = useState("");
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
        {/* search bar section */}
        <div className="input_box">
          <div className="row container d-flex align-items-center pt-5">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="d-flex align-items-center justify-content-center">
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
              <div className="d-flex align-items-center justify-content-center">
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
              <div className="d-flex align-items-center justify-content-center">
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
              <div className="d-flex align-items-center justify-content-center">
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
          <div className="input-container">
            <input
              type="text"
              name="text"
              className="search_input"
              placeholder="Search chemicals..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill=""
              viewBox="0 0 24 24"
              className="search_icon"
            >
              <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                id="SVGRepo_tracerCarrier"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect fill="white" height="24" width="24"></rect>{" "}
                <path
                  fill=""
                  d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>

        <div id="about">
          <div id="polymers" className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>Polymers</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </header>

            <div className="row about-cols">
              {polymers
                .filter((val) => val.title.toLowerCase().includes(query))
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </header>

            <div className="row about-cols">
              {solvents
                .filter((val) => val.title.toLowerCase().includes(query))
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </header>

            <div className="row about-cols">
              {chemicalsAndIntermediates
                .filter((val) => val.title.toLowerCase().includes(query))
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </header>

            <div className="row about-cols">
              {specialityChemicals
                .filter((val) => val.title.toLowerCase().includes(query))
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

export default Polymer;
