import React from "react";
import { Link } from "react-router-dom";
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
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="member hover-item">
                <img
                  src="https://img.freepik.com/free-photo/pensive-concentrated-managers-standing-modern-cafe_1262-17088.jpg?size=626&ext=jpg&uid=R115557865&ga=GA1.2.1388915471.1694001144&semt=ais"
                  className="img-fluid"
                  alt="person"
                />
                <div className="member-content">
                  <h4>Walter White</h4>
                  <span>CEO</span>
                  <p>
                    Magni qui quod omnis unde et eos fuga et exercitationem.
                    Odio veritatis perspiciatis quaerat qui aut aut aut
                  </p>
                  <div className="social">
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
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
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Team Member --> */}
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="member hover-item">
                <img
                  src="https://img.freepik.com/free-photo/man-safety-equipment-his-workplace_23-2148976363.jpg?size=626&ext=jpg&uid=R115557865&ga=GA1.2.1388915471.1694001144&semt=ais"
                  className="img-fluid"
                  alt="person"
                />
                <div className="member-content">
                  <h4>Sarah Jhinson</h4>
                  <span>Team Leader</span>
                  <p>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas
                    repellendus. In architecto rerum rerum temporibus
                  </p>
                  <div className="social">
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
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
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Team Member --> */}
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="member hover-item">
                <img
                  src="https://img.freepik.com/free-photo/happy-ambitious-hr-manager-choosing-you_1262-19137.jpg?w=900&t=st=1696853965~exp=1696854565~hmac=ee6594190ba3db536a81a9afee6fd98cc8f4bf24207a6e7324cd10a63be73496"
                  className="img-fluid"
                  alt="person"
                />
                <div className="member-content">
                  <h4>Vinita Khare</h4>
                  <span>Manager</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </p>
                  <div className="social">
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
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
                  </div>
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
