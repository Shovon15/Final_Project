import React from "react";
import Banner from "../Banner/Banner";
import SearchSection from "../Search/SearchSection";
import Categories from "../Categories/Categories";
import LetestProducts from "../LetestProducts/LetestProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <SearchSection />
      <Categories />
      <LetestProducts />
    </div>
  );
};

export default Home;
