import React from "react";
import laptop from "../../assets/courses/laptop.png";

const Course = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition p-3 flex flex-col">

      {/* Course Image */}
      <img
        src={laptop}
        alt="Course"
        className="w-full h-[140px] object-cover rounded-lg"
      />

      {/* Title */}
      <h3 className="font-semibold mt-3 text-[15px] leading-tight line-clamp-1">
        Beginner's Guide to Design
      </h3>

      {/* Author */}
      <p className="text-gray-600 text-sm mt-1">
        By Ronald Richards
      </p>

      {/* Stars */}
      <div className="flex text-yellow-400 text-lg mt-1">
        ★★★★☆
      </div>

      {/* Details */}
      <p className="text-gray-600 text-[13px] mt-1 leading-tight">
        22 Total Hours. 155 Lectures. Beginner
      </p>

      {/* Price */}
      <p className="font-bold text-[16px] mt-2">₹149</p>
    </div>
  );
};

export default Course;
