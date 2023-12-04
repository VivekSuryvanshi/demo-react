import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  return (
    <>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <div className="footer_logo">
                  <img
                    src="../assets/images/logos/bbvmg_logo_white.png"
                    alt="logo"
                    width="130px"
                    className="pb-3"
                  />
                </div>
                <p>
                  At Bhagirath BVM Grand (HK) Limited, we are the catalysts of
                  global trade, a company that thrives on connecting the world
                  through commerce.{" "}
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <HashLink to="/terms#TermsAndConditions">Terms of service</HashLink>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <HashLink to="/privacy#PrivacyAndPolicy">Privacy policy</HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  <b>Address - Room TA07, 6th Floor Woon Lee,Commercial Building
                  No. 7-9 Austin Avenue Tsim Sha Tsui, Kowloon (HK)</b>
                </p>
                <p>
                  <strong>Phone : </strong>
                  <Link to="tel:+852 39195807" style={{ color: "#5ca595" }}>
                    +852 39195807
                  </Link>
                  <br />
                  <strong>Fax : </strong>
                  <Link to="tel:+852 39195837" style={{ color: "#5ca595" }}>
                    +852 39195837
                  </Link>
                </p>
                <div className="social-links">
                  <Link to="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to="/" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link to="/" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link to="/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Coming Soon</h4>
                <button><Link to="/contact">Get in Touch</Link></button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>Bhagirath BVM Grand (HK) Limited</strong>.
            All Rights Reserved
          </div>
          <div className="credits">
            Designed & maintained by
            <Link to="/" style={{ color: "#5ca595" }}>
              {" "}
              Bhagirath Technologies
            </Link>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </>
  );
};

export default Footer;
