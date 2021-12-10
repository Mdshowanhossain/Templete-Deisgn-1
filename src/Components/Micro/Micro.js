import React from "react";
import "./Micro.css";
const Micro = () => {
  return (
    <>
      <div className="micro_bg">
        <div className="activate_carbon_container">
          <div className="multi_title_wrapper">
            <span className="multi_title">MICRON CARTRIDGE FILTERS</span>
          </div>
          <img src="./images/carbo.png" alt="" />

          <div className="activate_carbon_content">
            <p>
              Britannic supplies SS304/SS316/316L/UPVC constructed housing
              cartridge filters which widely used to remove tiny particles like
              sediments silt etc... In many filtering applications, a choice
              between the use cartridge filter has to be made. Both are
              sediments filters, that is to say they reduce the amount of
              sediments transported by the fluid trough filtration.
            </p>
            <p>There are some differences between these two filter systems:</p>
            <p>Bag filters are mostly surface-type filters.</p>

            <div className="application_img">
              <p>
                <img src="./images/liz.png" alt="" className="" />
                The choice of cartridge filter depends on the application.
                Cartridge filters are preferable for systems with contaminations
                lower than 100 ppm, that is to say with contamination levels
                lower than 0.01% in weight. Cartridge filter can be surface or
                depth-type filter: depth-type filters capture particles and
                contaminant through the total thickness of the medium, while in
                surface filters (that are usually made of thin materials like
                papers, woven wire, cloths) particles are blocked on the surface
                of the filter.
              </p>
              <p>
                <img src="./images/liz.png" alt="" className="" />
                Surface filters are best if you are filtering sediment of
                similar-sized particles. If all particles are i.e. five micron,
                a pleated 5-micron filter works best because it has more surface
                area than other filters. Compared with pleated surface filters,
                depth filters have a limited surface area, but they have the
                advantage of depth.
              </p>
              <p>
                <img src="./images/liz.png" alt="" className="" />
                It can be generally stated that if the size of filter surface is
                increased, higher flows are possible, the filter last longer,
                and the dirt holding capacity increases. Cartridge filters are
                normally designed disposable: this means that they have to be
                replaced when the filter is clogged.
              </p>
            </div>
            <span className="application">TYPICAL APPLICATIONS:</span>
            <p>
              Used for potable water treatment, municipal water filtration etc…
              Widely used in hotels, restaurants, food & beverages etc…
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Micro;
