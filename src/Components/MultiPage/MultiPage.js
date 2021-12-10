import React from "react";
import "./MultiPage.css";
const MultiPage = () => {
  return (
    <>
      <div className="m_bg">
        <div className="multi_page_container">
          <div className="multi_title_wrapper">
            <span className="multi_title">MULTI STAGES ONLINE FILTERS</span>
          </div>
          <img src="./images/multi.png" alt="" className="multi_img" />

          <small>
            The multistage water purifiers remove 99.9% of the contaminants from
            the tap water. They are ideally suited for drinking, cooking
            applications. Pre- Sediment filtration is an effective for reducing
            turbidity, silt, debris, clusters, microbes, sediments, clay etc..
            Secondary Carbon and carbon block filters provides excellent removal
            of free chlorine; Volatile Organic compounds (VOCs), pesticides,
            asbestos, chlorine bi-products such as THM’s, and numbers of manmade
            chemicals.
          </small>
          <br />
          <br />
          <small>
            Carbon filters also enhance taste and removes undesirable odours
            from the tap water. Iodine value of the carbon filters shall be
            estimated as 900.
          </small>
          <div className="multi_bottom_title">TECHNICAL SPECIFICATIONS:</div>

          <div className="technical_specification_container">
            <div className="multi_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>Flow rate: 0.5 to 1 GPM</small>
            </div>
            <div className="multi_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>Material of housing: Rugged Polypropylene.</small>
            </div>
            <div className="multi_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>No of Filters: 3</small>
              <ul>
                <li>10 micron PP sediment filter.</li>
                <li>Activated carbon filter.</li>
                <li>Post carbon block filter.</li>
              </ul>
            </div>
            <div className="multi_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>Pipe inlet & outlet: ¾ inch (Threaded)</small>
            </div>
            <div className="multi_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>Operating temperature: 10 to 45℃</small>
            </div>
          </div>

          <div className="multi_bottom_title">SALIENT FEATURES:</div>

          <div className="technical_specification_container">
            <div className="multi_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>
                Three layers structure cartridge offers high dirty holding
                capacity, longer service life.
              </small>
            </div>
            <div className="multi_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>
                Rugged polypropylene housing provides excellent compatibility
                from leakage, high pressure and temperature tolerance.
              </small>
            </div>

            <div className="multi_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>
                Formed by thermal bond using any binders and adhesives.
              </small>
            </div>
            <div className="multi_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>Easy and safe cartridge incineration and disposal.</small>
            </div>
            <div className="multi_bottom_img">
              <img src="./images/liz.png" alt="" />
              <small>All kind of adaptors are available.</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiPage;
