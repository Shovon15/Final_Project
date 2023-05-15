import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useMemo, useState, useContext } from "react";
import { useRef } from "react";
import { DashboardContext } from "../../../Context/DashboardContext";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CgErase } from "react-icons/cg";
import { MdEditCalendar } from "react-icons/md";

const Sidebar = () => {
  const { openSidebar, setOpenSidebar } = useContext(DashboardContext);
  console.log(openSidebar);

  const [openClass, setOpenClass] = useState("w-full");

  const openCheck = useMemo(() => {
    if (openSidebar) setOpenClass("w-full ease-in-out duration-500 ");
    else setOpenClass("w-12 ease-in-out duration-500 ");
  }, [openSidebar]);
  // ---------for click outside nav close--------------------
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        if (window.innerWidth <= 920) {
          setOpenSidebar(false);
        }
        // console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const menus = [
    { name: "Profile Info", link: "/dashboard/", icon: <CgProfile /> },
    {
      name: "Create Post",
      link: "/dashboard/CreatePost",
      icon: <HiOutlinePencilSquare />,
    },
    {
      name: "Manage My Posts",
      link: "/dashboard/managePost",
      icon: <CgErase />,
      margin: true,
    },
    {
      name: "Booking orders",
      link: "/dashboard/bookingOrders",
      icon: <MdEditCalendar />,
      margin: true,
    },

    {
      name: "Logout",
      link: "/dashboard/logout",
      icon: <FiLogOut />,
    },
  ];

  return (
    <Card
      className={`fixed ${
        openSidebar ? "w-72" : "w-20"
      } min-h-screen bg-[#28dab6] z-10 text-white p-4 shadow-xl duration-500 rounded-none
     shadow-blue-gray-900/5`}
      ref={menuRef}
    >
      <div className="mb-2 p-0 flex justify-between items-center">
        <Typography
          variant="h5"
          className={`${
            openSidebar ? "block" : "hidden"
          } opacity-1 overflow-hidden`}
        >
          Dashboard
        </Typography>
        <div
          onClick={() => setOpenSidebar(!openSidebar)}
          className="cursor-pointer mx-3 my-2"
        >
          {openSidebar ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </>
          )}
        </div>
      </div>
      <List className="ml-0 pl-0">
        {menus.map((menu, i) => {
          return (
            <NavLink
              key={i}
              to={`${menu.link}`}
              className={({ isActive }) =>
                isActive
                  ? `bg-gray-200 rounded-md ease-in-out font-bold ${openClass}`
                  : `${openClass}`
              }
            >
              <Tooltip
                content={menu.name}
                placement="right"
                className={`${openSidebar ? "hidden" : "block"}`}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <ListItem key={i}>
                  <ListItemPrefix>
                    <icon className="text-2xl">{menu.icon}</icon>
                  </ListItemPrefix>
                  <p
                    className={`whitespace-pre duration-500 ${
                      !openSidebar && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu.name}
                  </p>
                </ListItem>
              </Tooltip>
            </NavLink>
          );
        })}
      </List>
    </Card>
  );
};

export default Sidebar;
