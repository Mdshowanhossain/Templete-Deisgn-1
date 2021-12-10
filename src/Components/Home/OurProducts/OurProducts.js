import React, { useRef, useState } from "react";
import Carousel from "react-elastic-carousel";
import CategoriesData from "../../../Database/fakeData";
import "./OurProducts.css";

const OurProducts = () => {
  const [data, setData] = useState(CategoriesData);

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <>
      <div className="our_product_title">
        <h2 className="">
          OUR <span className="our_product_span_title">PRODUCTS</span>
        </h2>
        <span className="our_product_span_info">Information & Details</span>
      </div>

      <Carousel breakPoints={breakPoints}>
        {data.map((value) => {
          const { image, title } = value;

          return (
            <div className="our_product_card">
              <div className="our_product_img">
                <img src={image} alt="" />
              </div>
              <div className="our_product_image_content">
                <span>{title}</span>
              </div>
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default OurProducts;
