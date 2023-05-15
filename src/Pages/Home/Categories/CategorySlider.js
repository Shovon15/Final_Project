import React from "react";
import Carousel from "react-elastic-carousel";
import img1 from "../../../Assets/banner/image1.jpg";
import img2 from "../../../Assets/banner/image2.jpg";
import img3 from "../../../Assets/banner/image3.jpg";
import img4 from "../../../Assets/banner/image4.jpg";
import img5 from "../../../Assets/banner/image5.jpg";
import img6 from "../../../Assets/banner/image6.jpg";
import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const CategorySlider = ({ categories }) => {
  const carouselRef = React.createRef(null);
  let resetTimeout;

  // console.log(categories);
  return (
    <Carousel
      //   breakPoints={breakPoints}
      ref={carouselRef}
      enableMouseSwipe={true}
      itemsToShow={7}
      // itemsToScroll={1}
      // renderArrow={myArrow}
      pagination={false}
      // renderPagination={myPagination}
      enableAutoPlay={true}
      autoPlaySpeed={2500}
      onNextEnd={({ index }) => {
        // console.log("index", index, "length", items.length);
        if (index === 7) {
          clearTimeout(resetTimeout);
          resetTimeout = setTimeout(() => {
            carouselRef?.current?.goTo(0);
          }, 2000); // same time
        }
      }}
    >
      {categories.map((category, i) => (
        <Link
          to={`${category.categoryName.toLowerCase()}`}
          key={i}
          className="mx-2"
        >
          <img className="rounded-md" src={category.image} alt="..." />
          <Typography variant="h6" className="text-center ">
            {category.categoryName}
          </Typography>
        </Link>
      ))}
    </Carousel>
  );
};

export default CategorySlider;
