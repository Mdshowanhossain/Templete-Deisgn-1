import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="nav_bg ">
        <header className="container">
          <a href="#" className="logo">
            <img src="./images/nav/logo1.png" alt="" className="nav_logo" />
          </a>
          <input type="checkbox" name="" id="menu-bar" />
          <label htmlFor="menu-bar">
            <i className="fas fa-bars"></i>
          </label>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
                <ul>
                  <li>
                    <Link to="/mission">VISION & MISSION</Link>
                  </li>
                  <li>
                    <Link to="/ourpolicy">OUR POLICY</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">PRODUCTS +</a>
                <ul>
                  <li>
                    <a href="#">Domestic Water Purifiers</a>

                    <ul>
                      <li>
                        <Link to="rosystem">50 GPD RO SYSTEM</Link>
                      </li>
                      <li>
                        <Link to="multipage">MULTI PAGE ONLINE SYSTEM</Link>
                      </li>
                      <li>
                        <Link to="dispenser">WATER FILTERS WITH DISPENSER</Link>
                      </li>
                      <li>
                        <Link to="/shown">SHOWER FILTERS</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="cooler">WATER COOLERS</Link>
                  </li>
                  <li>
                    <a href="#">WATER TREATMENT SYSTEM</a>

                    <ul>
                      <li>
                        <Link to="multifilter">MULTIMEDIA FILTERS</Link>
                      </li>

                      <li>
                        <Link to="/activecarbon">ACTIVATED CARBON FILTERS</Link>
                      </li>
                      <li>
                        <Link to="/softeners">WATER SOFTENERS</Link>
                      </li>
                      <li>
                        <Link to="/bagfilters">BAG FILTERS</Link>
                      </li>
                      <li>
                        <Link to="/micro">MICRON CARTIGE FILTERS</Link>
                      </li>
                      <li>
                        <Link to="/strelizers">UV STRELIZERS</Link>
                      </li>
                      <li>
                        <Link to="/csi">COOPER SILVER ICRONAZATION SYSTEM</Link>
                      </li>
                      <li>
                        <Link to="/rosystem">RO SYSTEM</Link>
                      </li>
                      <li>
                        <Link to="/dmystem">DM SYSTEM</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">WASTE WATER TREATMENT PLANT</a>
                    <ul>
                      <li>
                        <Link to="/greaywater">
                          GRAY WATER TREATMENT PLANTS
                        </Link>
                      </li>

                      <li>
                        <Link to="/sewage">SWAGER WATER TREATMENT PLANTS</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/childwater">CHILLED WATER TREATMENT</Link>
                  </li>
                  <li>
                    <Link to="/accosories">WATER TREATMENT ACCOSORIES</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/services">SERVICES</Link>
              </li>
              <li>
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
          <div className="nav_right_logo_container">
            <img src="./images/nav/logo2.png" alt="" className="first" />
            <img src="./images/nav/logo3.png" alt="" className="" />
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
