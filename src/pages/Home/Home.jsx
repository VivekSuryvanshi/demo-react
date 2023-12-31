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
            <div
              id="carousel_title"
              className="carousel-caption sm_device_title"
            >
              <h1>COMMODITIES AND FOOD PRODUCTS</h1>
              <p className="carousel_description">
                Are you looking for top-quality agriculture commodities and food
                products? Look no further! We ship our products all over the
                world, and our quality meets all the necessary requirements.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <div className="bg_img_2 bg_style"></div>
            <div
              id="carousel_title"
              className="carousel-caption sm_device_title"
            >
              <h1>PETROLEUM AND BIO FUEL</h1>
              <p className="carousel_description">
                When it comes to petroleum and biofuel, we've got you covered.
                Our products are shipped worldwide, and you can trust that the
                quality is always up to standard.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="bg_img_3 bg_style"></div>
            <div
              id="carousel_title"
              className="carousel-caption sm_device_title"
            >
              <h1>MINERALS AND ORES</h1>
              <p className="carousel_description">
                Searching for reliable sources of minerals and ores? Look no
                more! We ship these essential resources globally, and our
                quality always matches the requirements.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="bg_img_4 bg_style"></div>
            <div
              id="carousel_title"
              className="carousel-caption sm_device_title"
            >
              <h1>CHEMICALS AND CATTLE FIELD FERTILIZER</h1>
              <p className="carousel_description">
                In need of chemicals or cattle field fertilizer? You're in the
                right place. We deliver these products worldwide, and our
                quality consistently meets industry standards.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="bg_img_5 bg_style"></div>
            <div
              id="carousel_title"
              className="carousel-caption sm_device_title"
            >
              <h1>BUILDING MATERIALS AND CHEMICALS</h1>
              <p className="carousel_description">
                For building materials and chemicals, trust our offerings. We
                ship these products to every corner of the globe, and you can be
                confident in their quality.
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
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
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
                  When it comes to international trade, Our experience in
                  connecting businesses worldwide ensures smooth and efficient
                  transactions. Whether you're importing or exporting, we make
                  it simple.
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
                  Quality and authenticity are our priorities. Rest easy knowing
                  that our products are 100% certified, meeting the highest
                  standards and regulations. Your satisfaction is our guarantee.
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
                  We specialize in seamless international transport and
                  logistics, ensuring your cargo reaches its destination
                  effortlessly. Your goods, our commitment.
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
                At Bhagirath BVM Grand (HK) Limited, we are the catalysts of
                global trade, a company that thrives on connecting the world
                through commerce. With a passion for trade that transcends
                borders and industries, we're your trusted partner for all
                things products. We source, supply, and inspire trade globally,
                ensuring that our clients find in us a reliable gateway to a
                world of possibilities. Our commitment to excellence and our
                relentless pursuit of quality make us the preferred choice for
                businesses looking to explore, expand, and excel in
                international trade. Join us on this journey, and let's shape a
                future of global trade that knows no bounds.
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
                  We're your global merchants, passionate about delivering top-quality products to eager markets worldwide. With extensive experience and a robust network, we're your go-to partner for excellence in international trade.
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
                  At Bhagirath BVM Grand, we're dedicated to serving the world. Our products and services know no boundaries, ensuring you receive the best no matter where you are. Our mission is to enrich lives globally through trade, right to your doorstep.
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
                  Excellence is our way of life. We're a team of dedicated professionals who know international trade inside out. We take pride in building lasting relationships and ensuring our clients always get the best.
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
              At Bhagirath BVM Grand, we're here to cater to your every need. Our range of services is designed to make your life easier and more efficient. Here's what we offer:
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
                  <NavLink to="">Global Sourcing</NavLink>
                </h4>
                <p className="description">
                We're your reliable source for a wide range of products sourced from around the world. Count on us to find the finest products that meet your specifications.
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
                  <NavLink to="">Logistics and Shipping</NavLink>
                </h4>
                <p className="description">
                From cargo handling to global shipping solutions, we streamline the logistics process. Your products will reach their destination safely and on time.
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
                  <NavLink to="">Quality Assurance</NavLink>
                </h4>
                <p className="description">
                Quality is our hallmark. We rigorously inspect and verify products to ensure they meet the highest standards, so you can have complete confidence in what you receive.

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
                  <NavLink to="">Customized Solutions</NavLink>
                </h4>
                <p className="description">
                We understand that one size doesn't fit all. Our team tailors solutions to meet your specific needs, ensuring a seamless and efficient experience.
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
                  <NavLink to="">Global Market Access</NavLink>
                </h4>
                <p className="description">
                Whether you're a manufacturer looking to export or a business aiming to import, we open doors to global markets, expanding your reach and opportunities.
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
                  <NavLink to="">Customer Support</NavLink>
                </h4>
                <p className="description">
                Our commitment doesn't end with a transaction. We provide exceptional customer support, ensuring your satisfaction and addressing your queries and concerns promptly.

                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Call To Action Section ======= --> */}
        <section id="call-to-action">
          <div className="container text-center" data-aos="zoom-in">
            <h3>Reach out to us</h3>
            <p>
            Are you willing to make your global trade experience even more worthy? Let's work together to fulfil your sourcing needs, simplify logistics, and ensure quality standards. Contact us today to discover the world of possibilities waiting for you. More exciting things that you are looking for. Just a click and we will contact you. Make an effort and enjoy all the global trading sources. We are inviting you to join our trading method and explore various diverse services that can help you for your personal services.looking for. Just a click and we will contact you.            </p>
            <NavLink className="cta-btn" to="#">
              Contact Us
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
