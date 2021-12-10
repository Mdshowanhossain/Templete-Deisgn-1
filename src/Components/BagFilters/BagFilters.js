import React from "react";

const BagFilters = () => {
  return (
    <>
      <div className="activate_bg">
        <div className="activate_carbon_container">
          <div className="multi_title_wrapper">
            <span className="multi_title">BAG FILTERS</span>
          </div>
          <img src="./images/carbo.png" alt="" />

          <div className="activate_carbon_content">
            <p>
              Bag filters are in general frequently used for dust removal in
              industrial applications. The flow can be from the outside to the
              inside of the filter (that means, the separation of particles
              happens on the external surface of the filter) or the other way
              around, depending on the application. The particles are normally
              captured on the internal surface of the bag filter.
            </p>
            <p>
              Bag filters are in general not designed for replacement when they
              are clogged, but some bag filters for gaseous applications like
              dust removal can be cleaned, for example by mechanical shaking or
              by backwashing with compressed air (so called reverse-flow bag
              filters).
            </p>
            <p>Bag filters are mostly surface-type filters.</p>

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

export default BagFilters;
