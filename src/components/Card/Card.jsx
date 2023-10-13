import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./card.css";
import { NavLink } from "react-router-dom";
import parse from 'html-react-parser';

function Card(props) {
  // console.log(props.formula);
  return (
    <>
      <div
        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="about-col hover-item chemicals_card">
          <div className="img">
            <img
              src={props.img}
              alt="chemicals"
              loading="lazy"
              className="img-fluid"
            />
            <div className="icon">
              <i className="bi bi-hexagon-half"></i>
            </div>
          </div>
          <div className="container">
            <div className="d-flex">
              <div className="col-2 d-flex align-items-center justify-content-center pt-5">
                <img
                  src="../../assets/images/icons/molecule.png"
                  alt="icon"
                  width="22px"
                />
              </div>
              <div className="col-10">
                <h2 className="title float-start polymer-title">
                  <NavLink to="#">{props.title}</NavLink>
                </h2>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-2 d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/icons/grid.png"
                  alt="icon"
                  width="22px"
                />
              </div>
              <div className="col-5">
                <h2 className="custom_title polymer-title">
                  <NavLink to="#"> CAS Number -</NavLink>
                </h2>
              </div>
              <div className="col-5">
                <p className="polymer-desc">{props.cas}</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-2 d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/icons/formula.png"
                  alt="icon"
                  width="22px"
                />
              </div>
              <div className="col-5">
                <h2 className="custom_title polymer-title">
                  <NavLink to="#"> Formula -</NavLink>
                </h2>
              </div>
              <div className="col-5">
                <p className="polymer-desc">
                  {props.formula.map(chemicals => parse(chemicals))}
                  {/* (C<sub>10</sub>H<sub>8</sub>O<sub>4</sub>)<sub>n</sub> */}
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-2 d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/icons/check-list.png"
                  alt="icon"
                  width="22px"
                />
              </div>
              <div className="col-5">
                <h2 className="custom_title polymer-title">
                  <NavLink to="#">Other Names-</NavLink>
                </h2>
              </div>
              <div className="col-5">
                <p className="polymer-desc">
                  {props.othernames}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
