import React from "react";
import "./OurPolicy.css";
const OurPolicy = () => {
  return (
    <>
      <div className="policy_bg">
        <div className="about_container ">
          <div className="about_title_wrapper">
            <span className="about_title">OUR QUALITY POLICY</span>
          </div>
          <div className="policy_h_img">
            <img src="./images/pol.png" alt="" />
          </div>

          <div className="policy_container">
            <div className="policy_header_body_desc_content ">
              <p>
                Britannic Water Treatment Co W.L.L; deserves and committed to
                provide our customers with high quality products and services
                that meet the intended purpose within the agreed time frame and
                budget. We strive for good performance at minimum maintenance
                cost. Our products are approved by most of the consultants and
                are recommended by them for usage by all OEMs and in all major
                sectors. Our policy is to overall objective is to be recognized
                by our customers as the leading water treatment suppliers in
                Qatar. We will achieve this objective by fully satisfying each
                and every client. To this end, each department will set up its
                own Key Performance Objectives (KPO) that contributes to the
                attainment of the company’s objective. The policy is to review
                the progress toward our objectives and will be measured at least
                twice a year for suitability.
              </p>
            </div>
            <div className="policy_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>
                Relevant corrective actions will be done for any deviation.
              </small>
            </div>
            <div className="policy_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>
                We provides customer with the best value for their resources
                expended.
              </small>
            </div>
            <div className="policy_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>
                We provide open and effective communication with customers and
                suppliers.
              </small>
            </div>
            <div className="policy_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>
                We provide a system of continuous improvement across all
                disciplines.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;
