import React, { useState, useContext } from "react";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";
import Eye from "../../../Components/icon/Eye";
import EyeSlash from "../../../Components/icon/EyeSlash";
import img from "../../../Assets/sticker/log-in.png";

const SignUp = () => {
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const [userCheck, setUserCheck] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  let value = "Register";
  if (isLoading === true) {
    value = <Spinner color="green" className="mx-auto " />;
  }

  const handleSignUp = (data) => {
    setIsLoading(true);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setIsLoading(false);
        reset();
        toast.success("User Created Successfully.");
        const userInfo = {
          displayName: data.name,
          // image: image,
        };
        updateUser(userInfo)
          .then(() => {
            // saveUser(data.name, data.email, userRole, image);
            // navigate(from, { replace: true });
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setSignUpError(error.message);
      });
    // const image = data.image[0];
    // const formData = new FormData();
    // formData.append("image", image);
    // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    // fetch(url, {
    //     method: "POST",
    //     body: formData,
    // })
    //     .then((res) => res.json())
    //     .then((imgData) => {
    //         console.log(imgData);
    //         if (imgData.success) {
    //             let image = imgData.data.url;
    //             setSignUpError("");

    //         }
    //     });
  };

  const handleGoogleSignIn = () => {
    // console.log(data);
    setSignUpError(""); //for previous error reset
    googleSignIn()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        // saveUser(user.displayName, user.email, user.photoURL, userRole);
      })
      .catch((error) => {
        console.log(error.message);
        setSignUpError(error.message);
      });
  };
  return (
    <div className="flex justify-center py-5">
      <Card color="transparent" shadow={false}>
        <div className="mx-auto flex flex-col gap-3">
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <img src={img} alt="..." className="w-24 h-24" />
        </div>

        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6 text-start">
            {/* <Input size="lg" label="Name" /> */}
            <div>
              <Input
                size="lg"
                label="Name"
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div>
              <Input
                size="lg"
                label="email"
                type="text"
                {...register("email", {
                  required: "Email is Required",
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="relative">
              <Input
                size="lg"
                label="password"
                type={passwordShown ? "text" : "password"}
                {...register("password", {
                  required: "password is Required",
                })}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span onClick={togglePassword} className="cursor-pointer">
                  {passwordShown === true ? <Eye /> : <EyeSlash />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          <Button value={value} type="submit" className="mt-6" fullWidth>
            {value}
          </Button>
          {signUpError && (
            <p className="text-red-600">{signUpError.slice(10)}</p>
          )}
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Login
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default SignUp;
