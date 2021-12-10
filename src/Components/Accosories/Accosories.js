import React, { useState } from "react";
import CategoriesData from "../../Database/fakeData";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import "./Accosories.css";
const Accosories = () => {
  const [category, setCategory] = useState(CategoriesData);

  const findCategoryItem = (catItem) => {
    const result = CategoriesData.filter((curData) => {
      return curData.category === catItem;
    });
    setCategory(result);
  };

  return (
    <>
      <div className="acco_bg">
        <div className="accosories_container">
          <div className="about_title_wrapper">
            <span className="about_title">ACCESSORIES</span>
          </div>

          <div className="accessories_item">
            <span onClick={() => setCategory(CategoriesData)}>ALL</span>
            <span onClick={() => findCategoryItem("automatic")}>
              Automatic valves
            </span>
            <span onClick={() => findCategoryItem("Cartridges")}>
              Cartridges & Bags
            </span>
            <span onClick={() => findCategoryItem("Dosing")}>Dosing pumps</span>
            <span onClick={() => findCategoryItem("Medias")}>Medias</span>
            <span onClick={() => findCategoryItem("Membrances")}>
              Membrances
            </span>
          </div>

          <div className="accessories_image_wrapper">
            {category.map((v) => {
              const { image, category } = v;
              console.log(image);
              return (
                <>
                  <img src={image} alt="" />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Accosories;
