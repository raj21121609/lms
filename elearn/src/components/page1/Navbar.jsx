import React from "react";
import { ShoppingCart } from "lucide-react";
import logo from "../../assets/colorful-bird-gradient-illustration-logo-concept_1253202-1468.avif";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center gap-14 items-center w-full h-16 border-b-2 border-gray-200 px-4 ">
      <div className="flex items-center gap-5">
        <div className="flex text-[#2C3E50] items-center">
          <img className="h-10 w-10" src={logo} alt="" /> Myway
        </div>
        <div className="text-[#2C3E50]">Categories</div>
        <div class="group relative flex items-center w-[600px]">
          <svg
            class="absolute left-4 w-4 h-4 fill-[#9e9ea7]"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
          </svg>

          <input
            type="search"
            placeholder="Search"
            class="w-full h-10 pl-10 pr-4 rounded-lg bg-[#f3f3f4] text-[#0d0c22] placeholder-[#9e9ea7] border-2 border-transparent outline-none transition duration-300
            focus:border-gray-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(156,163,175,0.2)]
            hover:border-gray-400 hover:bg-white hover:shadow-[0_0_0_4px_rgba(156,163,175,0.2)]"
          />
        </div>
        <div className="text-[#2C3E50] cursor-pointer p-2">Teach on Myways</div>
      </div>
      <div className="flex gap-5 items-center pr-2">
        <div>
          <ShoppingCart color="#2C3E50" />
        </div>
        <button
          className="border-2 py-2 px-3 text-[#2C3E50] cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Log In
        </button>
        <button
          className="border-2 text-white bg-[#2C3E50] py-2 px-3 cursor-pointer"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
