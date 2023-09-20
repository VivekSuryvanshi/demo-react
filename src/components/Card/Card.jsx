import React from "react";
// import "../../../public/assets/css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./card.css";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <>
      <main id="main">
        <section id="about">
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
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="about-col hover-item">
                  <div className="img">
                    <img
                      src="https://img.freepik.com/free-vector/colorful-realistic-science-background_52683-35755.jpg?w=1060&t=st=1695119643~exp=1695120243~hmac=dd0ff0382ba2bafdc7cff751f8b13f8b14cf8318437e07b67d14106aa31e79a2"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i class="bi bi-hexagon-half"></i>
                    </div>
                  </div>
                  <div class="container">
                    <div class="d-flex">
                      <div class="col-2 d-flex align-items-center justify-content-center pt-5">
                        <img
                          src="../../assets/img/icons/molecule.png"
                          alt="icon"
                          width="30px"
                        />
                      </div>
                      <div class="col-10">
                        <h2 className="title float-start">
                          <NavLink to="#">Ethylene Vinyl Acetate (EVA)</NavLink>
                        </h2>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="col-2 d-flex align-items-center justify-content-center pt-2">
                        <img
                          src="../../assets/img/icons/grid.png"
                          alt="icon"
                          width="30px"
                        />
                      </div>
                      <div class="col-5">
                        <h2 className="custom_title">
                          <NavLink to="#"> CAS Number -</NavLink>
                        </h2>
                      </div>
                      <div class="col-5">
                        <p className="pt-3">1234567890</p>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="col-2 d-flex align-items-center justify-content-center">
                        <img
                          src="../../assets/img/icons/formula.png"
                          alt="icon"
                          width="30px"
                        />
                      </div>
                      <div class="col-5">
                        <h2 className="custom_title">
                          <NavLink to="#"> Formula -</NavLink>
                        </h2>
                      </div>
                      <div class="col-5">
                        <p className="pt-3">
                          (C<sub>10</sub>H<sub>8</sub>O<sub>4</sub>)<sub>n</sub>
                        </p>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="col-2 d-flex align-items-center justify-content-center">
                        <img
                          src="../../assets/img/icons/check-list.png"
                          alt="icon"
                          width="30px"
                        />
                      </div>
                      <div class="col-5">
                        <h2 className="custom_title">
                          <NavLink to="#">Other Names-</NavLink>
                        </h2>
                      </div>
                      <div class="col-5">
                        <p className="pt-3">
                          (C<sub>10</sub>H<sub>8</sub>O<sub>4</sub>)<sub>n</sub>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Card;
