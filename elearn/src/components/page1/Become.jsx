import React from "react";
import become from "../../assets/courses/become.png";

const Become = () => {
  return (
    <div className="h-[500px] w-[40%] px-20 w-full flex justify-between px-15">
      <div className="flex justify-center items-center ">
        <img className="w-[350px] " src={become} alt="" />
      </div>
      <div className="flex justify-center h-full w-[60%]">
        <div className="pt-[185px]">
          <div className="text-3xl font-[600]">Become an Instructor</div>
          <div className="text-[17px] text-gray-700   ">
            Instructor from around the world teach millions of students on Myway{" "}
            <br />
            We provide the tools and skills to teach what you love.
          </div>
          <div className="mt-6">
            <div className="relative group">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                  <div className="relative z-10 flex items-center space-x-2">
                    <span className="transition-all duration-500 group-hover:translate-x-1">
                      Start Your Journey
                    </span>
                    <svg
                      className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      ></path>
                    </svg>
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Become;
