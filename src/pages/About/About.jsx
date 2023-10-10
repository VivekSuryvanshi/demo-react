import React from "react";
import { Link } from "react-router-dom";

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
      <section id="about" class="about">
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
              <p class="about_content">
                Dolor iure expedita id fuga asperiores qui sunt consequatur
                minima. Quidem voluptas deleniti. Sit quia molestiae quia quas
                qui magnam itaque veritatis dolores. Corrupti totam ut eius
                incidunt reiciendis veritatis asperiores placeat.
              </p>
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                    <p>
                      Magni facilis facilis repellendus cum excepturi quaerat
                      praesentium libre trade
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-fullscreen-exit"></i>
                  <div>
                    <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                    <p>
                      Quo totam dolorum at pariatur aut distinctio dolorum
                      laudantium illo direna pasata redi
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-broadcast"></i>
                  <div>
                    <h5>Voluptatem et qui exercitationem</h5>
                    <p>
                      Et velit et eos maiores est tempora et quos dolorem autem
                      tempora incidunt maxime veniam
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
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  200+
                </span>
                <p>Clients</p>
              </div>
            </div>
            {/* <!-- End Stats Item --> */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  520+
                </span>
                <p>Projects</p>
              </div>
            </div>
            {/* <!-- End Stats Item --> */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  1453+
                </span>
                <p>Hours Of Support</p>
              </div>
            </div>
            {/* <!-- End Stats Item --> */}
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  50+
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
            <span>Our Team</span>
            <h2>Our Team</h2>
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

      {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
      <section id="faq" class="faq">
        <div class="container" data-aos="fade-up">
          <div class="section-header position-relative text-center pb-5">
            <span>Frequently Asked Questions</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div
            class="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="col-lg-10">
              <div class="accordion accordion-flush" id="faqlist">
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      <i class="bi bi-question-circle question-icon"></i>
                      Non consectetur a erat nam at lectus urna duis?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      <i class="bi bi-question-circle question-icon"></i>
                      Feugiat scelerisque varius morbi enim nunc faucibus a
                      pellentesque?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      <i class="bi bi-question-circle question-icon"></i>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      <i class="bi bi-question-circle question-icon"></i>
                      Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      <i class="bi bi-question-circle question-icon"></i>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
                <div class="accordion-item">
                  <h3 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      <i class="bi bi-question-circle question-icon"></i>
                      Tempus quam pellentesque nec nam aliquam sem et tortor
                      consequat?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    class="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div class="accordion-body">
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Frequently Asked Questions Section --> */}
      {/* below main content ends (logis) */}
    </>
  );
};

export default About;
