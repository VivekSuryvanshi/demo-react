import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import { NavLink } from "react-router-dom";
import Card from "../components/Card/Card";
import {polymers,solvents,chemicalsAndIntermediates} from "../chemicalsdata";

const Polymer = () => {
  return (
    <>
      <main id="main">
        <div id="about">
          <div className="container" data-aos="fade-up">
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
                return <Card 
                    img={val.img}
                    title={val.title}

                />;
              })}
            </div>
          </div>
          <div className="container" data-aos="fade-up">
            <header className="section-header">
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
                return <Card 
                    img={val.img}
                    title={val.title}

                />;
              })}
            </div>
          </div>
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>chemicalsAndIntermediates</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </header>

            <div className="row about-cols">
              {chemicalsAndIntermediates.map((val) => {
                return <Card 
                    img={val.img}
                    title={val.title}

                />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Polymer;
