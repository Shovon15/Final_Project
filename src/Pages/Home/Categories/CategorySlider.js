import { Carousel } from "@material-tailwind/react";
import React from "react";

const CategorySlider = ({ categories }) => {
  //   const carouselRef = React.createRef(null);
  //   let resetTimeout;
  console.log(categories[0].image);
  return (
    <Carousel itemsToShow={5}>
      {categories.map((category, i) => (
        <div key={i} className="w-96">
          <img className="rounded-md" src={category.image} alt="..." />
        </div>
      ))}
    </Carousel>
  );
};

export default CategorySlider;
