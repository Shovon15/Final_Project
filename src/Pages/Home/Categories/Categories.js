import { Spinner } from "@material-tailwind/react";
import React from "react";
import CategoryCard from "../../../Components/Card/CategoryCard";
import { useQuery } from "@tanstack/react-query";
import CategorySlider from "./CategorySlider";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/carCategory");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner color="indigo" className="m-auto w-12 h-12" />;
  }
  //   console.log(categories);
  return (
    <div className="my-10 bg-blue-gray-700">
      <h1 className="text-center text-2xl font-bold p-5">Categories</h1>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-10">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div> */}
      <CategorySlider categories={categories} />
    </div>
  );
};

export default Categories;
