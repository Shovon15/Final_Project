import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";

const Logout = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("    logout     ");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Button onClick={handleLogOut} className="btn btn-ghost font-bold">
        logOut
      </Button>
    </div>
  );
};

export default Logout;
