import React, { useState } from "react";
import signupimage from "../../assets/signupimage.png";
import { ArrowBigRight } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router";

export const SignupPage = () => {

  const navigate = useNavigate()
  const [data, setdata] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    first_name: "",
    last_name: "",
  });

  function handleChange(e){
    setdata({
        ...data,
        [e.target.name]:e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    try {
        await axios.post("http://127.0.0.1:8000/auth/register/",data)
    } catch (error) {
        console.error(error.response?.data)
    }
    navigate('/login')
  }

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <div className="w-1/2">
        <img
          src={signupimage}
          className="w-full h-full object-cover"
          alt="signup"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center px-20">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
                name='first_name'
                value={data.first_name}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1">
              <label className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
                name="last_name"
                value={data.last_name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Email ID"
              className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
                name="password1"
                value={data.password1}
                onChange={handleChange}
              />
            </div>

            <div className="flex-1">
              <label className="text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
                name="password2"
                value={data.password2}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md flex items-center justify-center gap-2 hover:opacity-90"
          >
            Create Account <ArrowBigRight size={20} />
          </button>
        </form>

        <div className="mt-6 mb-4 flex items-center gap-3">
          <hr className="flex-1 border-gray-300" />
          <span className="text-sm text-gray-500">Sign up with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="flex justify-center gap-4 -mt-2">
          <button className="border px-6 py-2 rounded-md flex items-center gap-2 text-sm">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
              className="h-4"
            />
            Facebook
          </button>

          <button className="border px-6 py-2 rounded-md flex items-center gap-2 text-sm">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg"
              className="h-4"
            />
            Google
          </button>

          <button className="border px-6 py-2 rounded-md flex items-center gap-2 text-sm">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg"
              className="h-4"
            />
            Microsoft
          </button>
        </div>
      </div>
    </div>
  );
};
