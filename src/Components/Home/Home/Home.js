import React from "react";
import { Route, Routes } from "react-router";
import Body from "../Body/Body";
import Header from "../Header/Header";
import OurProducts from "../OurProducts/OurProducts";

const Home = () => {
  return (
    <>
      <Header />
      <Body />
      <OurProducts />
    </>
  );
};

export default Home;
