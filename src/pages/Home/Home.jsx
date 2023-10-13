import React from "react";
import { NavLink } from "react-router-dom";
import Example from "../../components/Progress Bar/ProgressBar";
import Products from "../../components/Gallery_products/Products";
import Carousel from "../../components/Carousel_products/Carousel";

function Home() {
  return (
    <>
      {/* <!-- ======= Header ====== --> */}

      {/* <!-- ====== End Header ===== --> */}
      {/* <!-- Starts Hero Section --> */}
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <div className="bg_img_1 bg_style" loading="lazy"></div>
            <div id="carousel_title" className="carousel-caption sm_device_title">
              <h1>COMMODITIES AND FOOD PRODUCTS</h1>
              <p>
                Ship all over the world / The quality complies with the
                requirements
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="bg_img_2 bg_style"></div>
            <div id="carousel_title" className="carousel-caption sm_device_title">
              <h1>PETROLEUM AND BIO FUEL</h1>
              <p>
                Ship all over the world / The quality complies with the
                requirements
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="bg_img_3 bg_style"></div>
            <div id="carousel_title" className="carousel-caption sm_device_title">
              <h1>MINERALS AND ORES</h1>
              <p>
                Ship all over the world / The quality complies with the
                requirements
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="bg_img_4 bg_style"></div>
            <div id="carousel_title" className="carousel-caption sm_device_title">
              <h1>CHEMICALS AND CATTLE FIELD FERTILIZER</h1>
              <p>
                Ship all over the world / The quality complies with the
                requirements{" "}
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="bg_img_5 bg_style"></div>
            <div id="carousel_title" className="carousel-caption sm_device_title">
              <h1>BUILDING MATERIALS AND CHEMICALS</h1>
              <p>
                Ship all over the world / The quality complies with the
                requirements
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- End Hero Section --> */}

      <main id="main">
        {/* <!-- ======= Featured Services Section Section ======= --> */}
        <section id="featured-services">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 box">
                <img
                  src="./assets/images/icons/trade.png"
                  alt="international trade icon"
                  width="80px"
                />
                {/* <i className="bi bi-briefcase"></i> */}
                <h4 className="title">
                  <NavLink to="">INTERNATIONAL TRADE</NavLink>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>

              <div className="col-lg-4 box box-bg">
                <img
                  src="./assets/images/icons/certified.png"
                  alt="certified icon"
                  width="75px"
                />
                {/* <i className="bi bi-card-checklist"></i> */}
                <h4 className="title">
                  <NavLink to="">100% Certified</NavLink>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>

              <div className="col-lg-4 box">
                <img
                  src="./assets/images/icons/transportation.png"
                  alt="transport icon"
                  width="75px"
                />
                {/* <i className="bi bi-binoculars"></i> */}
                <h4 className="title">
                  <NavLink to="">International Transport and Logistics</NavLink>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Featured Services Section --> */}

        {/* <!-- ======= About Us Section ======= --> */}
        <section id="about">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h3>About Us</h3>
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
                      src="./assets/images/Home-page-img/about-us/global-business-graph.webp"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="bi bi-bar-chart"></i>
                    </div>
                  </div>
                  <h2 className="title">
                    <NavLink to="#">Global Merchant Trader</NavLink>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea.
                  </p>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="about-col hover-item">
                  <div className="img">
                    <img
                      src="./assets/images/Home-page-img/about-us/cargo-ship-with-cargo-container.webp"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="bi bi-brightness-high"></i>
                    </div>
                  </div>
                  <h2 className="title">
                    <NavLink to="#">We Serve Globally</NavLink>
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
                      src="./assets/images/Home-page-img/about-us/man-wearing-helmet.webp"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="icon">
                      <i className="bi bi-calendar4-week"></i>
                    </div>
                  </div>
                  <h2 className="title">
                    <NavLink to="#">Professional Excellence</NavLink>
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
        {/* <!-- End About Us Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        <section id="services">
          <div className="container" data-aos="fade-up">
            <header className="section-header wow fadeInUp">
              <h3>Services</h3>
              <p>
                Laudem latine persequeris id sed, ex fabulas delectus quo. No
                vel partiendo abhorreant vituperatoribus, ad pro quaestio
                laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta
                zanos paradigno tridexa panatarel.
              </p>
            </header>

            <div className="row">
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon">
                  <i className="bi bi-briefcase"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Lorem Ipsum</NavLink>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="bi bi-card-checklist"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Dolor Sitema</NavLink>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Sed ut perspiciatis</NavLink>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon">
                  <i className="bi bi-binoculars"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Magni Dolores</NavLink>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon">
                  <i className="bi bi-brightness-high"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Nemo Enim</NavLink>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <h4 className="title">
                  <NavLink to="">Eiusmod Tempor</NavLink>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Call To Action Section ======= --> */}
        <section id="call-to-action">
          <div className="container text-center" data-aos="zoom-in">
            <h3>Call To Action</h3>
            <p>
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <NavLink className="cta-btn" to="#">
              Call To Action
            </NavLink>
          </div>
        </section>
        {/* <!-- End Call To Action Section --> */}

        {/* <!-- Products we serve section starts --> */}
        <Carousel />
        {/* <!-- Products we serve section ends ----> */}

        {/* Progress bar section starts */}
        <div data-aos="fade-up">
          <Example data-aos-delay="1000" />
        </div>
        {/* Progress bar section ends */}
        {/* <!-- Trading Portfolio (filter gallery) section starts --> */}
        <Products />
        {/* <!-- Trading Portfolio (filter gallery) section ends ----> */}
      </main>
      {/* <!-- End #main --> */}
    </>
  );
}

export default Home;
