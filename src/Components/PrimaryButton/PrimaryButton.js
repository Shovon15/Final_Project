import { Button } from "@material-tailwind/react";
import React from "react";

const PrimaryButton = ({ className, children }) => {
  return (
    <Button
      className={`${className} bg-buttonColor focus:outline-none  `}
      onMouseDown={(e) => e.preventDefault()}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
