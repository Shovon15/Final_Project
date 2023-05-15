import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import img from "../../../Assets/sticker/log-in.png";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Eye from "../../../Components/icon/Eye";
import EyeSlash from "../../../Components/icon/EyeSlash";

const Login = () => {
  const [isLoading, setIsloading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const [loginError, setLoginError] = useState();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (data) => {
    setIsloading(true);
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setIsloading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setIsloading(false);
        setLoginError(error.message);
      });
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  let value = "Login";
  if (isLoading === true) {
    value = <Spinner color="green" className="mx-auto " />;
  }

  return (
    <div className="flex justify-center py-5">
      <Card color="transparent" shadow={false}>
        <div className="mx-auto flex flex-col gap-3">
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>
          <img src={img} alt="..." className="w-24 h-24" />
        </div>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6 text-start">
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

          <Button value={value} type="submit" className="mt-6" fullWidth>
            {value}
          </Button>
          {loginError && <p className="text-red-600">{loginError.slice(10)}</p>}
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account? {""}
            <Link
              to="/signup"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
