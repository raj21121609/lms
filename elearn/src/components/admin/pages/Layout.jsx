import React from "react";
import bird from "../../../assets/image-removebg-preview.png";
import { useState } from "react";
import {
  LogOut,
  Gauge,
  BookOpenText,
  MessageSquareText,
  CircleDollarSign,
  Settings,
  Menu,
} from "lucide-react";
import ladki from "../../../assets/ladki.png";
import { Outlet, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `flex gap-2 items-center w-full py-3 pl-5 transition
   ${
     isActive
       ? "border-l-4 border-blue-500 text-blue-500 bg-gray-800"
       : "text-white hover:text-blue-400 hover:bg-gray-800"
   }`;
const Layout = () => {
  const [isROlled, setisROlled] = useState(true);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/");
  };
  return (
    <div className="flex">
      {isROlled ? (
        <div className="w-[20%] bg-gray-900 h-screen py-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between px-3">
              <div className="flex items-center gap-2">
                <img src={bird} className="w-12" alt="logo" />
                <div className="text-white font-semibold">Myway</div>
              </div>
              <LogOut className="text-white cursor-pointer" onClick={logout} />
            </div>

            <div className="mt-12 flex flex-col">
              <NavLink to="/admin/dashboard" className={linkClass}>
                <Gauge />
                Dashboard
              </NavLink>

              <NavLink to="/admin/courses" className={linkClass}>
                <BookOpenText />
                Courses
              </NavLink>

              <NavLink to="/admin/communication" className={linkClass}>
                <MessageSquareText />
                Communication
              </NavLink>

              <NavLink to="/admin/revenue" className={linkClass}>
                <CircleDollarSign />
                Revenue
              </NavLink>

              <NavLink to="/admin/settings" className={linkClass}>
                <Settings />
                Settings
              </NavLink>
            </div>
          </div>

          <div className="text-white flex justify-between px-3 items-center">
            <div className="flex items-center gap-2">
              <img src={ladki} className="w-10 rounded-full" alt="user" />
              <div>Hi Raj,</div>
            </div>
            <Menu
              onClick={() => {
                setisROlled(!isROlled);
              }}
            />
          </div>
        </div>
      ) : (
        <div>hi</div>
      )}
      <div className="w-[80%] h-screen bg-gray-200 p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
