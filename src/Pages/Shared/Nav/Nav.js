import React, { useState, useEffect, useRef } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import logo from "../../../Assets/Logo/logo.png";
import PrimaryButton from "../../../Components/PrimaryButton/PrimaryButton";
import { NavLink } from "react-router-dom";
// import "./Nav.css";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

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
  const navList = [
    { name: "Home", link: "/", icon: "stats-chart-outline" },
    {
      name: "Dashboard",
      link: "/",
      icon: "bag-handle-outline",
    },
    {
      name: "Inbox",
      link: "/",
      icon: "chatbox-ellipses-outline",
    },
    {
      name: "Profile",
      link: "/",
      icon: "person-circle-outline",
      margin: true,
    },
    { name: "Setting", link: "/", icon: "settings-outline" },
    { name: "Log Out", link: "/", icon: "log-out-outline" },
  ];

  const navitem = (
    <>
      {navList.map((navitem, i) => (
        <NavLink key={i} className="m-2 ">
          {navitem.name}
        </NavLink>
      ))}
    </>
  );

  //   const navList = (
  //     <ul className="mb-4 mt-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row items-start lg:items-center">
  //       <NavLink
  //         to="home"
  //         spy={true}
  //         smooth={true}
  //         activeClass="active"
  //         offset={-70}
  //         duration={500}
  //         className="text-gray-800 hover:text-blue-500 font-semibold duration-500 cursor-pointer p-1"
  //       >
  //         Home
  //       </Link>

  //       <Link
  //         to="feature"
  //         spy={true}
  //         activeClass="active"
  //         smooth={true}
  //         offset={-50}
  //         duration={500}
  //         className="text-gray-800 hover:text-blue-500 font-semibold  duration-500 cursor-pointer p-1"
  //       >
  //         Feature
  //       </Link>

  //       <Link
  //         to="how_its_work"
  //         spy={true}
  //         activeClass="active"
  //         smooth={true}
  //         offset={-50}
  //         duration={500}
  //         className="text-gray-800 hover:text-blue-500 font-semibold duration-500 cursor-pointer p-1"
  //       >
  //         How it's work
  //       </Link>

  //       <Link
  //         to="why_this_app"
  //         spy={true}
  //         smooth={true}
  //         activeClass="active"
  //         offset={-50}
  //         duration={500}
  //         className="text-gray-800  hover:text-blue-500 font-semibold duration-500 cursor-pointer p-1"
  //       >
  //         Why this app
  //       </Link>

  //       <Link
  //         to="review"
  //         spy={true}
  //         smooth={true}
  //         activeClass="active"
  //         offset={-50}
  //         duration={500}
  //         className="text-gray-800  hover:text-blue-500 font-semibold duration-500 cursor-pointer p-1"
  //       >
  //         Review's
  //       </Link>

  //       <Link
  //         to="faq"
  //         spy={true}
  //         activeClass="active"
  //         smooth={true}
  //         offset={-50}
  //         duration={500}
  //         className="text-gray-800 hover:text-blue-500 font-semibold duration-500 cursor-pointer p-1"
  //       >
  //         FAQ
  //       </Link>
  //     </ul>
  //   );

  return (
    <Navbar
      className="sticky inset-0 z-10 h-max max-w-full bg-primary rounded-none border-none"
      ref={menuRef}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <img className="w-36" src={logo} alt="..." />
        <div className="flex items-center gap-2">
          <div className="mr-4 hidden lg:block">{navitem}</div>
          <PrimaryButton className="rounded-md text-sm hidden lg:inline-block">
            Login
          </PrimaryButton>

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
        {navitem}
        <PrimaryButton variant="gradient" fullWidth className="rounded-full ">
          Login
        </PrimaryButton>
        {/* <Button variant="gradient" size="sm" className="mb-2">
            <span>Buy Now</span>
          </Button> */}
      </Collapse>
    </Navbar>
  );
};
export default Nav;
