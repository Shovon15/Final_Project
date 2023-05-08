import React from "react";
import Carousel from "react-elastic-carousel";
import "./CarSlider.css";
import img1 from "../../../Assets/banner/image1.jpg";
import img2 from "../../../Assets/banner/image2.jpg";
import img3 from "../../../Assets/banner/image3.jpg";
import img4 from "../../../Assets/banner/image4.jpg";
import img5 from "../../../Assets/banner/image5.jpg";
import img6 from "../../../Assets/banner/image6.jpg";

const CarSlider = () => {
  const carouselRef = React.createRef(null);
  let resetTimeout;
  //   const breakPoints = [
  //     {
  //       width: 1,
  //       itemsToShow: 1,
  //     },
  //     {
  //       width: 550,
  //       itemsToShow: 2,
  //     },
  //     {
  //       width: 768,
  //       itemsToShow: 2,
  //     },
  //     {
  //       width: 1000,
  //       itemsToShow: 3,
  //     },
  //   ];
  const items = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
  ];
  return (
    <Carousel
      //   breakPoints={breakPoints}
      ref={carouselRef}
      enableMouseSwipe={true}
      itemsToShow={1}
      itemsToScroll={1}
      // renderArrow={myArrow}
      pagination={false}
      // renderPagination={myPagination}
      enableAutoPlay={true}
      autoPlaySpeed={2500}
      onNextEnd={({ index }) => {
        // console.log("index", index, "length", items.length);
        if (index === 5) {
          clearTimeout(resetTimeout);
          resetTimeout = setTimeout(() => {
            carouselRef?.current?.goTo(0);
          }, 2000); // same time
        }
      }}
    >
      {items.map((item, i) => (
        <div key={i} item={item}>
          <img className="rounded-md" src={item.img} alt="..." />
        </div>
      ))}
    </Carousel>
  );
};

export default CarSlider;
