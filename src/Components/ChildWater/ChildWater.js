import React from "react";
import "./ChildWater.css";
const ChildWater = () => {
  return (
    <>
      <div className="child_bg">
        <div className="about_container">
          <div className="about_title_wrapper">
            <span className="about_title">CHILLED WATER TREATMENT</span>
          </div>
          <img src="./images/chilled.png" alt="" />
          <div className="policy_header_body_desc_content">
            <p>
              Britannic do supply, cleaning, flushing and passivation for the
              HVAC chilled water system. The objective of cleaning , flushing
              and passivation is to remove debris such as slit, sand, scale,
              iron oxide deposits, weld slug and other contaminants that are
              present in a new pipe work system, The passivation process
              inhibits the piping network or system from corrosion. The process
              of the pre-operational flushing and cleaning becomes more
              important as if these contaminants are to remain in the system
              then it directly affect the cooling system efficiency and reduces
              flow through the system. These contaminants also prevent formation
              of formation of uniform protective passivating layers which
              further leads to corrosion in the system
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildWater;
