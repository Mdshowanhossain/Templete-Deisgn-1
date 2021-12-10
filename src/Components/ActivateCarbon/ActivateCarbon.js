import React from "react";
import "./ActivateCarbon.css";
const ActivateCarbon = () => {
  return (
    <>
      <div className="activate_bg">
        <div className="activate_carbon_container">
          <div className="multi_title_wrapper">
            <span className="multi_title">ACTIVATED CARBON FILTERS</span>
          </div>
          <img src="./images/carbo.png" alt="" />

          <div className="activate_carbon_content">
            <p>
              Britannic supplies valuable Activated Carbon Filter for variety of
              applications. Carbon filtration is widely used because of its
              ability to improve water by removing disagreeable tastes and
              odors, pesticides THMs (Chlorine by product) etc…They are used to
              trap organic chemicals and chlorine attack and degrade your RO
              membrane. It also removes many chemical, gases and in some cases
              it can be effective against microorganism. Generally one pound of
              carbon provides anywhere from 60 to 150 acres of surface area.
              When flow conditions are suitable, dissolved chemicals in water
              flowing over the carbon surface “stick” to the carbon in a thin
              film while the water passes on.
            </p>
            <span className="application">APPLICATIONS:</span>

            <div className="application_img">
              <p>
                <img src="./images/liz.png" alt="" className="" />
                Used for Potable water, Food & Beverages, Automobile Industries,
                Breweries, Sugar industries, Pharmaceutical Industries,
                Fertilizers industries etc…
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivateCarbon;
