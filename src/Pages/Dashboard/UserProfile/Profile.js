import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { Spinner } from "@material-tailwind/react";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner color="indigo" className="m-auto w-12 h-12" />;
  }
  return (
    <div>
      <h1>profile</h1>
      {user?.uid && <p>{user.email}</p>}
    </div>
  );
};

export default Profile;
