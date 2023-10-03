import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { NavLink } from "react-router-dom";
import "./chemical.css";
import Card from "../components/Card/Card";
import {
  polymers,
  solvents,
  chemicalsAndIntermediates,
  specialityChemicals,
} from "../chemicalsdata";

const Polymer = () => {
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
              {polymers.map((val) => {
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
              {solvents.map((val) => {
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
              {chemicalsAndIntermediates.map((val) => {
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
          <div id="speciality_chemicals" className="container" data-aos="fade-up">
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
              {specialityChemicals.map((val) => {
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
