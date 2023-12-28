import React from "react";
import { Link } from "react-router-dom";
import './about.css'
import Testimonials from "../../components/Testimonials/Testimonials";
import Faqs from "../../components/Faqs_section/Faq";
import { useSpring, animated } from "react-spring";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 2000,
    congif: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const About = () => {
  return (
    <>
      {/* hero section starts */}
      <div className="hero_bg bg_img2">
        <div
          className="breadcrums container aos-init aos-animate"
          data-aos="fade"
        >
          <h2 className="breadcrums_title">About Us</h2>
          <ol className="breadcrums_subtitle">
            <li>
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </li>
            <li style={{ color: "#5ca595" }} className="breadcrums_items">
              / About
            </li>
          </ol>
        </div>
      </div>
      {/* hero section ends */}
      {/* below main content starts (logis) */}
      {/* <!-- ======= About Us Section ======= --> */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
              <img
                src="./assets/images/About/about-us-img02.jpg"
                className="img-fluid"
                alt="about-us"
              />
              <Link
                to="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox play-btn"
              ></Link>
            </div>
            <div className="col-lg-6 content order-last  order-lg-first">
              <h3>About Us</h3>
              <p className="about_content">
                Welcome to Bhagirath BVM Grand, your trusted global merchant
                trader specialising in commodities and raw food supply. With a
                commitment to excellence and a vast network spanning the globe,
                we bring unparalleled expertise to the world of international
                trade.
              </p>
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <h5>Global Accessibility</h5>
                    <p>
                      We pride ourselves on our extensive reach across
                      continents, establishing robust partnerships with
                      suppliers and buyers worldwide. This enables us to source
                      the finest commodities and raw food products, ensuring
                      quality and reliability in every transaction.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-fullscreen-exit"></i>
                  <div>
                    <h5>Vast Supply Chain</h5>
                    <p>
                      Our dedicated team is adept at navigating the complexities
                      of the supply chain. From procurement to delivery, we
                      optimise every step, guaranteeing efficiency and timely
                      delivery. Our meticulous approach ensures that our clients
                      receive products of the highest standards.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-broadcast"></i>
                  <div>
                    <h5>Quality Assurance</h5>
                    <p>
                      Quality is paramount. We implement stringent quality
                      control measures throughout the supply chain to uphold the
                      integrity of the products we trade. Our commitment to
                      excellence is reflected in the satisfaction of our clients
                      who trust us for superior commodities and raw food
                      supplies.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Us Section --> */}
      {/* <!-- ======= Stats Counter Section ======= --> */}
      <section id="stats-counter" className="stats-counter pt-0">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  <Number n={250} />
                </span>
                <p>Clients</p>
              </div>
            </div>
            {/* <!-- End Stats Item --> */}
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  <Number n={100} />
                </span>
                <p>Projects</p>
              </div>
            </div>
            {/* <!-- End Stats Item --> */}
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  <Number n={1453} />
                </span>
                <p>Hours Of Support</p>
              </div>
            </div>
            {/* <!-- End Stats Item --> */}
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  <Number n={50} />
                </span>
                <p>Workers</p>
              </div>
            </div>
            {/* <!-- End Stats Item --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Stats Counter Section --> */}
      {/* <!-- ======= Our Team Section ======= --> */}
      <section id="team" className="team pt-0">
        <div className="container" data-aos="fade-up">
          <div className="section-header position-relative text-center pb-5">
            <h3>Our Team</h3>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex conic_animation conic_animation">
              <div className="member hover-item">
                <img
                  src="../assets/images/About/manish carpenter.jpeg" width="363px" height="242px" className="img-fluid"
                  alt="person"
                />
                <div className="member-content">
                  <h4>Mr. Manish Carpenter</h4>
                  <span>Director & Chief Executive Officer</span>
                  {/* <p>
                  30+ Years,Import and Export  of Engineering,Chemical,Fertilizers,Minerals & Agro Commodities etc.
                  </p> */}
                  {/* <div className="social">
                    <Link to="/">
                      <svg style={{ verticalAlign: 'text-bottom' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                      </svg>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <!-- End Team Member --> */}
            <div className="col-lg-4 col-md-6 d-flex conic_animation">
              <div className="member hover-item">
                <img
                  src="../assets/images/About/Tapas.jpg"
                  className="img-fluid"
                  alt="person"
                />
                <div className="member-content">
                  <h4>Mr. Tapas Bodak</h4>
                  <span>International Trade,Strategic Sales & Business Development</span>
                  {/* <p>
                  30+ Years,Import and Export  of Engineering,Chemical,Fertilizers,Minerals & Agro Commodities etc.
                  </p> */}
                  {/* <div className="social">
                    <Link to="/">
                      <svg style={{ verticalAlign: 'text-bottom' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                      </svg>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <!-- End Team Member --> */}
            <div className="col-lg-4 col-md-6 d-flex conic_animation">
              <div className="member hover-item">
                <img
                  src="../assets/images/About/Vimal.jpeg"
                  className="img-fluid"
                  alt="person"
                />
                <div className="member-content">
                  <h4>Vimal Kumar Chandwaney</h4>
                  <span>International Marketing & Sales & Execution Trade</span>
                  {/* <p>
                  30+ Years,Import and Export of Engineering, Chemicals, Fertilisers, HouseHold Electronic Goods & Capital Goods & Equipment’s, Agro Commodities etc. globally.
                  </p> */}
                  {/* <div className="social">
                    <Link to="/">
                      <svg style={{ verticalAlign: 'text-bottom' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                      </svg>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <!-- End Team Member --> */}
            <div className="col-lg-4 col-md-6 d-flex conic_animation">
              <div className="member hover-item">
                <img
                  src="../assets/images/About/Manu-shourie.jpg"
                  className="img-fluid"
                  alt="person"
                />
                <div className="member-content">
                  <h4>Manu Shourie</h4>
                  <span>Honorary Chairman & Strategic Partner</span>
                  {/* <p>
                  30+ Years,Import and Export of Engineering, Chemicals, Fertilisers, HouseHold Electronic Goods & Capital Goods & Equipment’s, Agro Commodities etc. globally.
                  </p> */}
                  {/* <div className="social">
                    <Link to="/">
                      <svg style={{ verticalAlign: 'text-bottom' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                      </svg>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <!-- End Team Member --> */}
            <div className="col-lg-4 col-md-6 d-flex conic_animation">
              <div className="member hover-item">
                <img
                  src="../assets/images/About/Anurag-pandey.jpeg"
                  className="img-fluid"
                  alt="person"
                />
                <div className="member-content">
                  <h4>Anurag Pandey</h4>
                  <span>Chief Business Officer & Strategic Partner</span>
                  {/* <p>
                  30+ Years,Import and Export of Engineering, Chemicals, Fertilisers, HouseHold Electronic Goods & Capital Goods & Equipment’s, Agro Commodities etc. globally.
                  </p> */}
                  {/* <div className="social">
                    <Link to="/">
                      <svg style={{ verticalAlign: 'text-bottom' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                      </svg>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to="/">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            {/* <!-- End Team Member --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Our Team Section --> */}
      <Testimonials />
      <Faqs />
      {/* below main content ends (logis) */}
    </>
  );
};

export default About;
