import React from "react";
import guy from "../../assets/guy.png";
import Footer from "../page1/Footer";
import { LucideShare2 } from "lucide-react";
import Revbox from '../reusables/Revbox'

const Coms = () => {
  return (
    <>
      <div className="flex pr-20">
        <div className=" bg-white mx-16 mt-8 rounded-2xl">
          <div className="w-full  rounded-2xl bg-[#EBEBEE] pt-3 ">
            <div className="pt-2">
              <img
                className="rounded-full w-1/2 object-cover mx-auto"
                src={guy}
              />
            </div>
            <p className="text-2xl mt-2 font-[600] mx-auto text-center">
              John Doe
            </p>
            <button className="bg-white mx-auto flex text-md font-[500] mt-3  px-6 py-2 rounded-md border border-gray-400">
              Share Profile
              <LucideShare2 className="ml-1" />
            </button>
            <hr className=" mt-5 border-gray-400 "></hr>

            <button className="w-full text-start py-6 pl-6 mt-3 hover:bg-gray-900 hover:text-white text-sm  text-gray-700">
              Profile
            </button>
            <hr className=" border-gray-400  "></hr>
            <button className="w-full text-start text-sm py-6 pl-6 hover:bg-gray-900 text-gray-700 hover:text-white ">
              My Course
            </button>
            <hr className=" border-gray-400  "></hr>
            <button className="w-full text-start text-sm py-6 pl-6 text-gray-700 hover:bg-gray-900 hover:text-white ">
              Teachers
            </button>
            <hr className=" border-gray-400 "></hr>
            <button className="w-full text-start py-6 pl-6 text-sm text-gray-700 hover:bg-gray-900 hover:text-white ">
              Message
            </button>
            <hr className=" border-gray-400 "></hr>
            <button className="w-full text-start py-6  pl-6  text-gray-700 rounded-b-2xl hover:bg-gray-900 hover:text-white text-sm ">
              My Reviews
            </button>
          </div>
        </div>
        <div className="w-[70%] mt-8">
          <div className="flex items-baseline gap-2">
            <div className="text-2xl font-[500]">Reviews</div>
            <div className="text-[14px]">(12)</div>
          </div>
          <div className="mt-2">
            <Revbox/>
            <Revbox/>
            <Revbox/>
            
          </div>
        </div>
      </div>
      <div className="h-8"></div>
      <Footer />
    </>
  );
};

export default Coms;
