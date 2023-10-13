import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
const Footer = () => {
  return (
    <>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
              <div className="text-center">
                <img src="./assets/images/logos/bbvmg_logo_white.webp" alt="logo" width="130px" className="pb-3"/>
              </div>
                <p>
                The company maximizes returns for the benefit of its stakeholders, associates and customers by pursuing sustainable growth and profit opportunities that leverage on its trading expertise, logistics network.
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
                    <Link to="/contact">Terms of service</Link>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <Link to="/">Privacy policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  Address - Room TA07, 6th Floor Woon Lee,Commercial Building No. 7-9 Austin Avenue
                </p>
                <p>
                    <strong>Phone : </strong><Link to="tel:+852 39195807" style={{color:"#5ca595"}}>+852 39195807</Link><br/>
                    <strong>Fax : </strong><Link to="tel:+852 39195837" style={{color:"#5ca595"}}>+852 39195837</Link>

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
                <h4>Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna veniam enim veniam illum dolore legam minim
                  quorum culpa amet magna export quem marada parida nodela
                  caramase seza.
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>Bhagirath Technologies</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <Link to="/" style={{color:"#5ca595"}}>Bhagirath Technologies</Link>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}
    </>
  );
};

export default Footer;
