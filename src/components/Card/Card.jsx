import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./card.css";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
        <div className="about-col hover-item chemicals_card">
          <div className="img">
            <img src={props.img} alt="chemicals" loading="lazy" className="img-fluid" />
            <div className="icon">
              <i class="bi bi-hexagon-half"></i>
            </div>
          </div>
          <div class="container">
            <div class="d-flex">
              <div class="col-2 d-flex align-items-center justify-content-center pt-5">
                <img
                  src="../../assets/images/icons/molecule.png"
                  alt="icon"
                  width="22px"
                />
              </div>
              <div class="col-10">
                <h2 className="title float-start polymer-title">
                  <NavLink to="#">{props.title}</NavLink>
                </h2>
              </div>
            </div>
            <div class="d-flex">
              <div class="col-2 d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/icons/grid.png"
                  alt="icon"
                  width="22px"
                />
              </div>
              <div class="col-5">
                <h2 className="custom_title polymer-title">
                  <NavLink to="#"> CAS Number -</NavLink>
                </h2>
              </div>
              <div class="col-5">
                <p className="polymer-desc">{props.cas}</p>
              </div>
            </div>
            <div class="d-flex">
              <div class="col-2 d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/icons/formula.png"
                  alt="icon"
                  width="22px"
                />
              </div>
              <div class="col-5">
                <h2 className="custom_title polymer-title">
                  <NavLink to="#"> Formula -</NavLink>
                </h2>
              </div>
              <div class="col-5">
                <p className="polymer-desc">
                  {props.formula}
                  {/* (C<sub>10</sub>H<sub>8</sub>O<sub>4</sub>)<sub>n</sub> */}
                </p>
              </div>
            </div>
            <div class="d-flex">
              <div class="col-2 d-flex align-items-center justify-content-center">
                <img
                  src="../../assets/images/icons/check-list.png"
                  alt="icon"
                  width="22px"
                />
              </div>
              <div class="col-5">
                <h2 className="custom_title polymer-title">
                  <NavLink to="#">Other Names-</NavLink>
                </h2>
              </div>
              <div class="col-5">
                <p className="polymer-desc">
                  (C<sub>10</sub>H<sub>8</sub>O<sub>4</sub>)<sub>n</sub>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="about-col hover-item">
                  <div className="img">
                    <img
                      src="https://img.freepik.com/free-photo/researching-laboratory_1384-138.jpg?w=1060&t=st=1695119686~exp=1695120286~hmac=a9fd6ac335eebfb1a33b1096cf671b35e3d34a8d02029dc659ca0620b4a4c298"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i class="bi bi-hexagon-half"></i>{" "}
                    </div>
                  </div>
                  <h2 className="title">
                    <img
                      src="../../assets/img/icons/molecule.png"
                      alt="icon"
                      width="30px"
                      className="me-4"
                    />
                    <NavLink to="#">
                      Polyethelyne Terephthalate (PET Resin)
                    </NavLink>
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="about-col hover-item">
                  <div className="img">
                    <img
                      src="https://img.freepik.com/premium-photo/abstract-molecular-structures-unveiled-exploring-scientific-essence-3d-dna-molecules-biotechnology_938416-1621.jpg?w=1380"
                      alt=""
                      height="28.4rem"
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i class="bi bi-hexagon-half"></i>{" "}
                    </div>
                  </div>
                  <h2 className="title">
                    <img
                      src="../../assets/img/icons/molecule.png"
                      alt="icon"
                      width="30px"
                      className="me-4"
                    />
                    <NavLink to="#">
                      Polyvinyl Chloride Resin ( PVC Resin)
                    </NavLink>
                  </h2>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                    fugit, sed quia magni dolores eos qui ratione voluptatem
                    sequi nesciunt Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet.
                  </p>
                </div>
              </div> */}
    </>
  );
}

export default Card;
