import React, { useState } from "react";
import signupimage from "../../assets/signupimage.png";
import { ArrowBigRight } from "lucide-react";

export const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [data, setdata] = useState({
    
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Left Side Image */}
      <div className="w-1/2">
        <img
          src={signupimage}
          className="w-full h-full object-cover"
          alt="signup"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 flex flex-col justify-center px-20">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-6">
          Create Your Account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name + Last Name */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label className="text-sm font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="text-sm font-medium">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Email ID"
              className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password + Confirm */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex-1">
              <label className="text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="mt-1 h-11 w-full border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md flex items-center justify-center gap-2 hover:opacity-90"
          >
            Create Account <ArrowBigRight size={20} />
          </button>
        </form>

        {/* Divider + Social Login */}
        <div className="mt-6 mb-4 flex items-center gap-3">
          <hr className="flex-1 border-gray-300" />
          <span className="text-sm text-gray-500">Sign up with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4 -mt-2">
          <button className="border px-6 py-2 rounded-md flex items-center gap-2 text-sm">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" className="h-4" />
            Facebook
          </button>

          <button className="border px-6 py-2 rounded-md flex items-center gap-2 text-sm">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg" className="h-4" />
            Google
          </button>

          <button className="border px-6 py-2 rounded-md flex items-center gap-2 text-sm">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg" className="h-4" />
            Microsoft
          </button>
        </div>

      </div>
    </div>
  );
};