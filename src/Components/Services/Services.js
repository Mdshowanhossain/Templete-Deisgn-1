import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <>
      <div className="service_bg">
        <div className="about_container">
          <div className="about_title_wrapper">
            <span className="about_title">OUR SERVICES</span>
          </div>
          <img src="./images/sr.png" alt="" />
          <div className="policy_header_body_desc_content">
            <p>
              BWTC provides ultimate service for all our equipment, systems and
              services time to time. We have dedicated drilled technical team to
              helping customers to optimize the performance of their processes.
              Water systems require regular monitoring and maintenance to
              protect against fluctuating water conditions. With Britannic at
              your service, you are guaranteed peace of mind with the assurance
              of efficient operation and long equipment life
            </p>
            <p>
              Our localized service allows us to schedule service and repairs as
              and when you need it. Our service contracts and preventive
              maintenance agreements include extended warranties, emergency
              repairs and complete replacement of necessary spares and
              consumables.
            </p>
          </div>
          <p>
            Britannic under takes complete service of Water Treatment & Waste
            Water Treatment Systems such as:
          </p>
          <div className="policy_bottom_img bottom_img">
            <img src="./images/liz.png" alt="" />
            <small>Cleaning of Commercial Reverse Osmosis plants.</small>
          </div>
          <div className="policy_bottom_img">
            <img src="./images/liz.png" alt="" />
            <small>
              Revamping of Filtration & Water Softener Systems ie: replacement
              of Sand medias, softener resin, repairing auto valves Replacement
              of Filter cartridges, RO Membranes, troubleshooting etc..
            </small>
          </div>
          <div className="policy_bottom_img">
            <img src="./images/liz.png" alt="" />
            <small>
              AMC, O&M Contracts for RO Systems, water softener, DM Plants, Grey
              water/Sewage water treatment plants
            </small>
          </div>
          <div className="policy_bottom_img">
            <img src="./images/liz.png" alt="" />
            <small>
              Our integrated service support includes Consultancy, Water
              Management Surveys, Project Management, Erection & Commissioning,
              Operator training, Servicing etc.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
