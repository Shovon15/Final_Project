import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const products = useLoaderData();
  // console.log(products);
  console.log(products.length);
  console.log(products);

  return (
    <div className="mx-10">
      {products.length > 0 && (
        <h1 className="text-start text-lg font-bold p-5 uppercase">
          Total {products.length}{" "}
          {products.length === 1 ? "product" : "products"} for{" "}
          {products[0].categoryName}
        </h1>
      )}
      {products.length === 0 && (
        <h1 className="text-start text-lg font-bold p-5 uppercase">
          No Product avalable
        </h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 md:mx-10">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
