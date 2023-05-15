import { Button, Option, Select } from "@material-tailwind/react";
import React from "react";

const SearchSection = () => {
  const menus = [
    {
      id: 1,
      label: "Car body",
      options: ["suv", "sedan", "crossover", "jeep", "sports"],
    },
    {
      id: 2,
      label: "Model Year",
      options: ["suv", "sedan", "crossover", "jeep", "sports"],
    },
    {
      id: 3,
      label: "Car Brand",
      options: ["suv", "sedan", "crossover", "jeep", "sports"],
    },
    {
      id: 4,
      label: "Car color",
      options: ["suv", "sedan", "crossover", "jeep", "sports"],
    },
    {
      id: 5,
      label: "Car Condition",
      options: ["suv", "sedan", "crossover", "jeep", "sports"],
    },
  ];
  // console.log(menus);
  return (
    <div className="p-10 border-2 border-gray-200">
      <h1 className="text-start font-bold">Search</h1>
      <div className="grid grid-cols-3 gap-5">
        {menus.map((items, i) => (
          <div key={i}>
            <Select
              size="lg"
              label={items.label}
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
              className="text-black"
            >
              {items.options.map((item, i) => (
                <Option className="text-start" key={i}>
                  {item}
                </Option>
              ))}
            </Select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
