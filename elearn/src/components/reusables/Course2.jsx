import React from "react";
import laptop from "../../assets/courses/laptop.png";

const Course2 = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition p-3 flex flex-col">
      <img
        src={laptop}
        alt="Course"
        className="w-full h-[140px] object-cover rounded-lg"
      />

      <h3 className="font-semibold mt-3 text-[15px] leading-tight line-clamp-1">
        Beginner's Guide to Design
      </h3>

      <p className="text-gray-600 text-sm mt-1">By Ronald Richards</p>

      <div className="w-[60%] h-[2px] bg-blue-500 rounded-lg mt-2"></div>

      <div className="flex text-yellow-400 text-lg mt-1">★★★★☆</div>

      
    </div>
  );
};

export default Course2;
