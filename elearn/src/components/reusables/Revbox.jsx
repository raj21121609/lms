import React from "react";

const Revbox = () => {
  return (
    <div className="w-full mt-3 p-3 border-2 border-gray-300 rounded-lg">
      <div className="flex gap-2 items-center">
        <div className="text-[15px] ">Course Name:</div>
        <div className="font-bold">Beginer's guide to design</div>
      </div>
      <div className="flex items-baseline gap-2 ">
        <div className="text-[15px]">Rating:</div>
        <div className="flex text-yellow-400 text-lg mt-1 ">★★★★☆</div>
      </div>
      <div className="flex gap-2">
        <div className="text-[15px]">Review:</div>
        <div className="leading-relaxed text-gray-700">
          I was initially apprehensive, having no prior design experience. But
          the instructor, John Doe, did an amazing job of breaking down complex
          concepts into easily digestible modules. The video lectures were
          engaging, and the real-world examples really helped solidify my
          understanding.
        </div>
      </div>
    </div>
  );
};

export default Revbox;
