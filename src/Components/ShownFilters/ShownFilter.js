import React from "react";
import "./ShownFilter.css";
const ShownFilter = () => {
  return (
    <>
      <div className="shown_bg">
        <div className="shown_container">
          <div className="multi_title_wrapper">
            <span className="multi_title">MULTI STAGES ONLINE FILTERS</span>
          </div>
          <img src="./images/shower.png" alt="" className="shown_img" />
          <div className="shown_content_container">
            <div className="show_content">
              <span className="">FILTERS:</span>
              <p>Stage-I : Micro Filtration</p>
              <p>Stage-II: KDF</p>
              <p>
                Stage III: Mixture of KDF & Carbon Stage IV: Nutshell Activated
              </p>
              <p>Carbon Stage Stage V: Micro Filtration</p>
            </div>

            <div className="show_content_parameters">
              <span className="">PARAMETERS:</span>
              <p>- Approved Water: Municipal or ground</p>
              <p>- Working Temperature: 0 to 80 C</p>
              <p>- Capacity: 0 to 3000 GPD</p>
              <p>- Media Life: 2 -3 Months.</p>
            </div>
            <div className="show_content_working">
              <span className="">WORKING PRINCIPLE:</span>
              <p>
                <img src="./images/liz.png" alt="" />
                <b>First Stage:</b>Micro Filtration can remove effectively the
                solid substances like water rust and sand.
              </p>
              <p>
                <img src="./images/liz.png" alt="" />
                <b>Second Stage:</b>: KDF removes various heavy metals in the
                water such as lead, mercury, chrome, nickel etc. It also removes
                harmful substances such as hydrogen sulphide.
              </p>
              <p>
                <img src="./images/liz.png" alt="" />
                <b>Third Stage:</b>The mixture of KDF and activated carbon
                removes the organic particles, pesticide, insecticide etc.
              </p>
              <p>
                <img src="./images/liz.png" alt="" />
                <b>Fourth Stage:</b>Nutshell activated carbon removes free
                chlorine and chlorite Bi product of chlorine form the bathing
                water.
              </p>
              <p>
                <img src="./images/liz.png" alt="" />
                <b>Fifth Stage:</b> MF removes the carbon grains and gives a
                fresh water for bathing applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShownFilter;
