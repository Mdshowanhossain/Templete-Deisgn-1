import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_wrapper">
          <div className="footer_container">
            <div className="footer_contact_side">
              <h4>
                CONTACT <span>US</span>
                <div className="contact_us_side_content">
                  <div className="address">
                    <div className="contact_icons_wrapper">
                      <div className="home">
                        <i className="fas fa-home"></i>
                        <small>Britannic Water Treatment Company W.L.L.</small>
                      </div>

                      <div className="call">
                        <i className="fas fa-phone"></i>
                        <small>Qatar : +974 4460 0212 / +974 4460 1088</small>
                      </div>
                      <div className="message">
                        <i className="fas fa-envelope"></i>
                        <small>
                          Projects Division: sales@britannicwater.com
                        </small>
                      </div>
                      <div className="email">
                        <i className="fas fa-envelope"></i>
                        <small>
                          Domestic Division: info@britannicwater.com
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </h4>
            </div>
            <div className="footer_main_links">
              <h4>
                MAIN <span>LINKS</span>
              </h4>
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </div>
            <div className="footer_services">
              <h4>
                OUR <span>SERVICES</span>
              </h4>

              <li>
                <a href="#">Cleaning of Commercial Reverse Osmosis plants.</a>
              </li>

              <li>
                <a href="#">Revamping of Filtration & Water Softener Systems</a>
              </li>
              <li>
                <a href="#">AMC, O&M Contracts for RO Systems,</a>
              </li>
              <li>
                <a href="#">Water Management Surveys</a>
              </li>
              <li>
                <a href="#">Erection & Commissioning</a>
              </li>
              <li>
                <a href="#">Operator training</a>
              </li>
            </div>
            <div className="footer_follow_us">
              <h4>
                FOLLOW <span>US</span>
              </h4>
              <h3>
                <i class="fab fa-facebook-f"></i>
              </h3>
            </div>
          </div>
        </div>

        <div className="copy_right_container">
          <small>Copyright 2021 Britannic Water. All rights reserved.</small>
          <div className="copy_right_right_side">
            Powered by <img src="./images/footer/krom.png" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
