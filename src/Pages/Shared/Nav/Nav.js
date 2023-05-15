import React, { useState, useEffect, useRef, useContext } from "react";
import "./Nav.css";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
  Avatar,
  ListItem,
  List,
  Tooltip,
} from "@material-tailwind/react";
import logo from "../../../Assets/Logo/logo.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import userImg from "../../../Assets/sticker/user.png";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user } = useContext(AuthContext);
  // console.log(user);
  const imgUrl = user?.photoURL === "null" ? user.photoURL : userImg;
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // ---------for click outside nav close--------------------
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenNav(false);
        // console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const navList = (
    <ul className="mb-4 mt-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row items-start lg:items-center">
      <NavLink
        to="/"
        className="text-gray-800 font-semibold duration-500 cursor-pointer p-1"
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className="text-gray-800 font-semibold  duration-500 cursor-pointer p-1"
      >
        About
      </NavLink>
      <NavLink
        to="/blog"
        className="text-gray-800 font-semibold  duration-500 cursor-pointer p-1"
      >
        Blog
      </NavLink>
    </ul>
  );

  return (
    <Navbar
      className="sticky inset-0 z-10 h-max max-w-full bg-white rounded-none shadow-none border-none px-4 py-2"
      ref={menuRef}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <img className="w-36" src={logo} alt="..." />
        <div className="flex items-center gap-2">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <icon>
            <ion-icon name="accessibility-outline" />
          </icon>
          {user?.uid ? (
            <>
              <Link to="/dashboard/">
                <Tooltip content="Dashboard">
                  <Avatar src={imgUrl} alt="avatar" />
                </Tooltip>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <PrimaryButton className="rounded-md text-sm hidden lg:inline-block">
                  Login
                </PrimaryButton>
              </Link>
            </>
          )}

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse className="flex flex-col text-black text-start" open={openNav}>
        {navList}
        <PrimaryButton variant="gradient" fullWidth className="rounded-full ">
          Login
        </PrimaryButton>
      </Collapse>
    </Navbar>
  );
};
export default Nav;
