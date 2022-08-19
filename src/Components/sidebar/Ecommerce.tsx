import SidebarLinkGroup from "./SidebarLinkGroup";

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { handleOpen } from "../store/actions/SidebarActions";
function Ecommerce() {
  const location = useLocation();
  const { pathname } = location;

  const dispatch = useDispatch();
  const visible = useSelector((state: any) => state.sidebar.visible);

  return (
    <SidebarLinkGroup activecondition={pathname.includes("ecommerce")}>
      {(handleClick: any, open: any) => {
        return (
          <React.Fragment>
            <a
              href="#0"
              className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                pathname.includes("ecommerce") && "hover:text-slate-200"
              }`}
              onClick={(e) => {
                e.preventDefault();
                visible ? handleClick() : dispatch<any>(handleOpen());
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                    <path
                      className={`fill-current text-slate-400 ${
                        pathname.includes("ecommerce") && "text-indigo-300"
                      }`}
                      d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                    />
                    <path
                      className={`fill-current text-slate-700 ${
                        pathname.includes("ecommerce") && "!text-indigo-600"
                      }`}
                      d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                    />
                    <path
                      className={`fill-current text-slate-600 ${
                        pathname.includes("ecommerce") && "text-indigo-500"
                      }`}
                      d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                    />
                  </svg>
                  <span
                    className={`text-sm font-medium ml-3  lg:${
                      visible && "opacity-100"
                    } 2xl:opacity-100 duration-200`}
                  >
                    E-Commerce
                  </span>
                </div>
                {/* Icon */}
                <div className="flex shrink-0 ml-2">
                  <svg
                    className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                      open && "transform rotate-180"
                    }`}
                    viewBox="0 0 12 12"
                  >
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                  </svg>
                </div>
              </div>
            </a>
            <div className={`lg:${visible && "block"} 2xl:block`}>
              <ul
                className={`pl-9 mt-1 text-left transition duration-700 ${
                  !open && "hidden"
                }`}
              >
                <li className="mb-1 last:mb-0">
                  <Link
                    to="/"
                    className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                  >
                    <span className="text-sm font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Customers
                    </span>
                  </Link>
                </li>
                <li className="mb-1 last:mb-0">
                  <Link
                    to="/"
                    className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                  >
                    <span className="text-sm font-medium lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Orders
                    </span>
                  </Link>
                </li>
                <li className="mb-1 last:mb-0">
                  <Link
                    to="/"
                    className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                  >
                    <span className="text-sm font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Invoices
                    </span>
                  </Link>
                </li>
                <li className="mb-1 last:mb-0">
                  <Link
                    to="/"
                    className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                  >
                    <span className="text-sm font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Shop
                    </span>
                  </Link>
                </li>
                <li className="mb-1 last:mb-0">
                  <Link
                    to="/"
                    className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                  >
                    <span className="text-sm font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Shop 2
                    </span>
                  </Link>
                </li>
                <li className="mb-1 last:mb-0">
                  <Link
                    to="/"
                    className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                  >
                    <span className="text-sm font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Single Product
                    </span>
                  </Link>
                </li>
                <li className="mb-1 last:mb-0">
                  <Link
                    to="/"
                    className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                  >
                    <span className="text-sm font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Cart
                    </span>
                  </Link>
                </li>
                <li className="mb-1 last:mb-0">
                  <Link
                    to="/"
                    className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                  >
                    <span className="text-sm font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Cart 2
                    </span>
                  </Link>
                </li>
                <li className="mb-1 last:mb-0">
                  <Link
                    to="/"
                    className="block text-slate-400 hover:text-slate-200 transition duration-150 truncate"
                  >
                    <span className="text-sm font-medium  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                      Pay
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </React.Fragment>
        );
      }}
    </SidebarLinkGroup>
  );
}
export default Ecommerce;
