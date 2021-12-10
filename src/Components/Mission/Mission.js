import React from "react";
import "./Mission.css";
const Mission = () => {
  return (
    <>
      <div className="mission_bg">
        <div className="mission_container ">
          <div className="mission_header container">
            <div className="mission_header_image">
              <img src="./images/m.png" alt="" />
            </div>

            <div className="mission_header_wrapper">
              <div className="mission_title_wrapper">
                <span className="about_title">OUR MISSION</span>
              </div>

              <div className="mission_header_content">
                <p>
                  Our company mission is to provide superior quality products
                  and services to our customers of optimum quality by combining
                  our expertise, management capabilities, highly professional
                  systems, state of the art machinery and high potential to
                  provide quality works that satisfies our clients’ needs and
                  meets their requirements and expectations. " By conducting the
                  business with honesty and integrity."
                </p>
                <span className="mission_span">
                  "By conducting the business with honesty and integrity."
                </span>
                <br />
                <span className="mission_span">
                  "We aim to deliver all our projects in a professional manner
                  with and uncompromising view to quality and ethical
                  considerations. "
                </span>
              </div>

              <div className="mission_bottom_img">
                <img src="./images/liz.png" alt="" />
                <small>
                  By conducting the business with honesty and integrity.
                </small>
              </div>
              <div className="mission_bottom_im">
                <img src="./images/liz.png" alt="" />
                <small>
                  By striving to enrich the relationship with all stake holders.
                </small>
              </div>
              <div className="our_vision">
                <div className="vision_title_wrapper">
                  <span className="about_title">OUR VISION</span>
                </div>
                <p>
                  The vision of BWTC product systems is to expand the working
                  horizon to cover all customers over the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
