import React, { use } from "react";
import loginpageImage from "../../assets/loginimage.png";
import { useState } from "react";
import { ArrowBigRight } from "lucide-react";
import api from "../../api/api";
import { useNavigate } from "react-router";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/auth/login/", data);
      localStorage.setItem("refresh", res.data.refresh);
      localStorage.setItem("access", res.data.access);
      navigate("/");
      console.log(res.data.access);
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-white">
        <div className="w-1/2 ml-20">
          <p className="text-center mt-23 font-[700] text-xl">
            Sign In to Your Account
          </p>
          <form onSubmit={handleSubmit}>
            <div className="font-[500] mt-10">
              <label>Username</label> <br></br>
              <input
                className="mt-1 h-11 w-[490px] border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
                type="text"
                name="username"
                placeholder="Enter your username"
                value={data.username}
                onChange={handleChange}
              />
            </div>
            <div className="font-[500] mt-5">
              <label>Password</label> <br></br>
              <input
                className="mt-1 h-11 w-[490px] border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-1/4 mt-8 bg-black text-white py-3 rounded-md flex items-center justify-center gap-2 hover:opacity-90"
              value="submit"
            >
              Sign In <ArrowBigRight size={20} />
            </button>
          </form>

          <div className="mt-6 mb-4 flex items-center gap-3">
            <hr className="flex-1 border-gray-300" />
            <span className="text-sm text-gray-500">Sign up with</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <div className="flex justify-center gap-4 mt-2">
            <button className="border px-6 py-2 bg-gray-200 rounded-md flex items-center gap-2 text-sm">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
                className="h-4 "
              />
              Facebook
            </button>

            <button className="border px-6 py-2  bg-gray-200 rounded-md flex items-center gap-2 text-sm">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg"
                className="h-4"
              />
              Google
            </button>

            <button className="border px-6 py-2 bg-gray-200 rounded-md flex items-center gap-2 text-sm">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg"
                className="h-4"
              />
              Microsoft
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            className="h-full w-full object-cover"
            src={loginpageImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
