import React from "react";
import "./DmSystem.css";
const DmSystem = () => {
  return (
    <>
      <div className="dm_bg">
        <div className="activate_carbon_container">
          <div className="multi_title_wrapper">
            <span className="multi_title">DM SYSTEM</span>
          </div>
          <img src="./images/dm.png" alt="" />

          <div className="activate_carbon_content">
            <p>
              Britannic offers high purity water producing De-Mineralization
              column of different sizes for bringing down the dissolved solids
              have to be brought down less than 5 ppm to 1ppm, the same is done
              using the process of ion exchange and using two columns or three
              columns techniques. The demineralization process utilizes acid
              regenerated anion resin to remove minerals from water. Ion
              exchange demineralization has enjoys the wide spread use for the
              production of purest water. When the TDS exceeds 1200 ppm,
              membrane treatment is essential before ion exchange system.
            </p>

            <span className="application">APPLICATIONS:</span>
            <div className="application_img">
              <p>
                <img src="./images/liz.png" alt="" className="" />
                Major industries which have requirements for DM Plant are
                Textile, Pharma, Steel, Refineries, Stream and process, Power,
                Beverages and distilleries.
              </p>
            </div>
            <div className="application_img">
              <p>
                <img src="./images/liz.png" alt="" className="" />
                DM plant also used in Food, Hospitals, Sugar industry,
                Automobile, Agro, Bio-Technology, Electronic industry,
                Fisheries, Semi-Conductor industries etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DmSystem;
