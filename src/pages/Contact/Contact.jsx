import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="hero_bg bg_img4">
        <div
          className="breadcrums container aos-init aos-animate"
          data-aos="fade"
        >
          <h2 className="breadcrums_title">Contact Us</h2>
          <ol className="breadcrums_subtitle">
            <li>
              <Link style={{ color: "white" }} to="/">
                Home
              </Link>
            </li>
            <li style={{ color: "#5ca595" }} className="breadcrums_items">
              / Contact Us
            </li>
          </ol>
        </div>
      </div>
      <div className="container map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.3635548092857!2d114.17104248000466!3d22.30208629047177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400eed2031cfb%3A0x37783db78c22f34c!2sWoon%20Lee%20Commercial%20Building%2C%207-9%20Austin%20Ave%2C%20Tsim%20Sha%20Tsui%2C%20Hong%20Kong!5e0!3m2!1sen!2sin!4v1697188892371!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          title="map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <section id="contact" class="contact_section">
        <div class="container">
          <h3 class="contact_title">Contact Us</h3>
          <p class="contact_desc">
          Contact us today to discover the world of possibilities waiting for you. More exciting things that you are looking for. Just a click and we will contact you. Make an effort and enjoy all the global trading sources. We are inviting you to join our trading method and explore various diverse services that can help you for your personal services.looking for. Just a click and we will contact you.

          </p>
          <div class=" row contact_info_cards">
            <div class="col-md-4">
              <div class="contact_adress">
                <i class="bi bi-geo-alt"></i>
                <h3>Address</h3>
                <p>
                  Room TA07, 6th Floor Woon Lee,Commercial Building No. 7-9
                  Austin Avenue
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact_phon">
                <i class="bi bi-phone"></i>
                <h3>Phone Number</h3>
                <div class="d-flex justify-content-center">
                  <p>
                    <strong>Tel</strong>
                    <Link to="tel:+85239195807"> +85239195807 </Link>
                  </p>
                  <p class="ms-2">
                    <strong>Fax</strong>
                    <Link to="tel:+85239195837 "> +852 39195837 </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact_email">
                <i class="bi bi-envelope"></i>
                <h3>email</h3>
                <p>
                  <a href="mailto:info@bbvmg.com">info@bbvmg.com</a>
                </p>
              </div>
            </div>
          </div>
          <div class="form">
            <form action="https://formspree.io/f/mdorvboo" method="POST" class="contact_form">
              <div class="row">
                <div class="form-group col-md-6">

                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    placeholder="Enter Your Name"
                    autoComplete="off"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="subject"
                  class="form-control"
                  placeholder="Your Query"
                  autoComplete="off"
                  required
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  placeholder="Description"
                  autoComplete="off"
                  required
                ></textarea>
              </div>
              <div class="text-center fs-3">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
