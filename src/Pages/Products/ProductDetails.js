import { Typography } from "@material-tailwind/react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    categoryName,
    car_brand,
    car_model,
    car_model_year,
    condition,
    description,
    image,
    price,
    _id,
  } = product;
  console.log(product);
  return (
    <div>
      <img src={image} alt="..." />
      <Typography>{categoryName}</Typography>
      <Typography>{car_brand}</Typography>
      <Typography>{car_model}</Typography>
      <Typography>{description}</Typography>
    </div>
  );
};

export default ProductDetails;
