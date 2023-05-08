import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import CarSlider from "./CarSlider";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-96 p-5 md:p-10">
      <div className="w-full md:w-1/2 flex flex-col gap-4 ">
        <h1 className="text-3xl md:text-5xl font-bold mt-5 md:mt-0">
          Make Your Dreams <br /> Come True
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <PrimaryButton className="mr-auto">About Us</PrimaryButton>
      </div>
      <div className="w-full md:w-1/2">
        <CarSlider />
      </div>
    </div>
  );
};

export default Banner;
