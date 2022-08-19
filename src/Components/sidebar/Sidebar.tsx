import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import Ecommerce from "./Ecommerce";
import Campaigns from "./Campaigns";
import Messages from "./Messages";
import Tasks from "./Tasks";
import Inbox from "./Inbox";
import Calendar from "./Calendar";
import ExpandBtn from "./ExpandBtn";
import { useDispatch, useSelector } from "react-redux";

import { handleClose, handleOpen } from "../store/actions/SidebarActions";
import { connect } from "react-redux";

function Sidebar() {
  const location = useLocation();
  const { pathname } = location;

  const dispatch = useDispatch();
  const visible = useSelector((state: any) => state.sidebar.visible);

  console.log("visible", visible);

  const handleClick = () => {
    if (visible) {
      dispatch<any>(handleClose());
    } else {
      dispatch<any>(handleOpen());
    }
  };

  // const handleOpen = () => {
  //   dispatch({
  //     type: "SHOW",
  //   });
  // };

  // const handleClose = () => {
  //   dispatch({
  //     type: "HIDE",
  //   });
  // };

  // const handleClick = () => {
  //   if (visible) return handleClose();
  //   else return handleOpen();
  // };

  return (
    <div>
      {/* sidebar */}
      <div
        id="sidebar"
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll ${
          visible ? "w-64" : "w-20"
        } lg:overflow-y-auto no-scrollbar  shrink-0 bg-slate-800 p-4 transition-all duration-700 ease-in-out ${
          visible ? "-translate-x-64" : "translate-x-0"
        }`}
      >
        {/* sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          <button
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => handleClick()}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>

          {/* Logo */}
          <Link to="/" className="block">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient
                  x1="28.538%"
                  y1="20.229%"
                  x2="100%"
                  y2="108.156%"
                  id="logo-a"
                >
                  <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
                  <stop stopColor="#A5B4FC" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="88.638%"
                  y1="29.267%"
                  x2="22.42%"
                  y2="100%"
                  id="logo-b"
                >
                  <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
                  <stop stopColor="#38BDF8" offset="100%" />
                </linearGradient>
              </defs>
              <rect fill="#6366F1" width="32" height="32" rx="16" />
              <path
                d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                fill="#4F46E5"
              />
              <path
                d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                fill="url(#logo-a)"
              />
              <path
                d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                fill="url(#logo-b)"
              />
            </svg>
          </Link>
        </div>
        {/* Links */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className={`lg:${
                  visible && "hidden"
                } 2xl:hidden text-center w-6`}
              >
                •••
              </span>
              <span className={`hidden lg:${visible && "block"}`}>Pages</span>
            </h3>
            <ul>
              {/* Dashboard */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname === "/" && "bg-slate-900"
                }`}
              >
                <Link
                  to="/"
                  className={`block text-slate-200 hover:teTasksxt-white truncate transition duration-150 ${
                    pathname === "/" && "hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        className={`fill-current text-slate-400 ${
                          pathname === "/" && "!text-indigo-500"
                        }`}
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                      />
                      <path
                        className={`fill-current text-slate-600 ${
                          pathname === "/" && "text-indigo-600"
                        }`}
                        d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                      />
                      <path
                        className={`fill-current text-slate-400 ${
                          pathname === "/" && "text-indigo-200"
                        }`}
                        d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                      />
                    </svg>
                    <span className="text-sm font-medium ml-3 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Dashboard
                    </span>
                  </div>
                </Link>
              </li>
              {/* Ecommerce */}
              <Ecommerce />
              <Campaigns />
              <Messages />
              <Tasks />
              <Inbox toggle={visible} />
              <Calendar />
            </ul>
          </div>
        </div>
        {/* Expand / collapse button */}
        {/* <ExpandBtn /> */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => handleClick()}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className={`w-6 h-6 fill-current transition-all duration-700 ${
                  visible && "rotate-180"
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default connect()(Sidebar);
