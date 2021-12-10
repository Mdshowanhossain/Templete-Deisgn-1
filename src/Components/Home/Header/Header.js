import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header_main_container">
        <div className="header_container">
          <div className="left_header_image_container">
            <div className="top_image_wrapper">
              <img
                src="./images/slider/new1.png"
                alt=""
                className="top_image"
              />
            </div>

            <div className="middle_image_container">
              <img
                src="./images/slider/new1.png"
                alt=""
                className="middle_left_image"
              />
              <img
                src="./images/slider/new1.png"
                alt=""
                className="middle_right_image"
              />
            </div>

            <div className="bottom_image_wrapper">
              <img
                src="./images/slider/new1.png"
                alt=""
                className="bottom_image"
              />
            </div>
          </div>

          <div className="right_header_container">
            <div className="right_header_image_content">
              <span>ISO 9001: 2015 CERTIFIED COMPANY</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
