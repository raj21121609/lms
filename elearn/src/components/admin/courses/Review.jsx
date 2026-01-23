import React from "react";
import { Ellipsis } from "lucide-react";
import reviewBoy from "../../../assets/reviewBoy.png";

const Review = () => {
  return (
    <>
      <div className="flex gap-3 mx-3 my-3">
        <div className=" rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 px-6 py-7  gap-3">
          <div className="text-gray-600">Total Reviews</div>
          <div className="text-2xl font-medium">1000</div>
        </div>
        <div className="rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 px-6 py-7 gap-3">
          <div className="text-gray-600">1 Star Reviews</div>
          <div className="text-2xl font-medium flex items-center gap-2">
            <div>100</div>{" "}
            <div className="bg-red-500 w-10 h-7 rounded-sm text-gray-100 text-[18px] flex items-center justify-center">
              1.0
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 px-6 py-7 gap-3">
          <div className="text-gray-600">1 Star Reviews</div>
          <div className="text-2xl font-medium flex items-center gap-2">
            <div>100</div>{" "}
            <div className="bg-[#CA8A04] w-10 h-7 rounded-sm text-gray-100 text-[18px] flex items-center justify-center">
              1.0
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 px-6 py-7 gap-3">
          <div className="text-gray-600">1 Star Reviews</div>
          <div className="text-2xl font-medium flex items-center gap-2">
            <div>100</div>{" "}
            <div className="bg-yellow-400 w-10 h-7 rounded-sm text-gray-100 text-[18px] flex items-center justify-center">
              1.0
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 px-6 py-7 gap-3">
          <div className="text-gray-600">1 Star Reviews</div>
          <div className="text-2xl font-medium flex items-center gap-2">
            <div>100</div>{" "}
            <div className="bg-green-400 w-10 h-7 rounded-sm text-gray-100 text-[18px] flex items-center justify-center">
              1.0
            </div>
          </div>
        </div>
        <div className="rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 px-6 py-7 gap-3">
          <div className="text-gray-600">1 Star Reviews</div>
          <div className="text-2xl font-medium flex items-center gap-2">
            <div>100</div>{" "}
            <div className="bg-green-500 w-10 h-7 rounded-sm text-gray-100 text-[18px] flex items-center justify-center">
              1.0
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 flex flex-col gap-3">
        <div className="rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 h-full px-7 py-4 gap-3 ">
          <div className="flex justify-between my-1">
            <div className="text-gray-600 text-sm">Rating: ⭐⭐⭐⭐⭐</div>
            <div>
              <Ellipsis />
            </div>
          </div>
          <div className="flex gap-3 my-2">
            <div className="text-gray-600">Course Name:</div>{" "}
            <div className="font-[500] ">Introduction to UI/UX</div>
          </div>
          <div className="flex gap-3 my-2">
            <img src={reviewBoy} className="h-12" alt="" />
            <div>
              <div className="font-[500]">Cris Walter </div>
              <div className="text-gray-500">3 days ago</div>
            </div>
          </div>
          <div className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            sapiente aliquam nulla libero doloremque qui? Quisquam cupiditate
          </div>
        </div>
        <div className="rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 h-full px-7 py-4 gap-3 ">
          <div className="flex justify-between my-1">
            <div className="text-gray-600 text-sm">Rating: ⭐⭐⭐⭐⭐</div>
            <div>
              <Ellipsis />
            </div>
          </div>
          <div className="flex gap-3 my-2">
            <div className="text-gray-600">Course Name:</div>{" "}
            <div className="font-[500] ">Introduction to UI/UX</div>
          </div>
          <div className="flex gap-3 my-2">
            <img src={reviewBoy} className="h-12" alt="" />
            <div>
              <div className="font-[500]">Cris Walter </div>
              <div className="text-gray-500">3 days ago</div>
            </div>
          </div>
          <div className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            sapiente aliquam nulla libero doloremque qui? Quisquam cupiditate
          </div>
        </div>
        <div className="rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 h-full px-7 py-4 gap-3 ">
          <div className="flex justify-between my-1">
            <div className="text-gray-600 text-sm">Rating: ⭐⭐⭐⭐⭐</div>
            <div>
              <Ellipsis />
            </div>
          </div>
          <div className="flex gap-3 my-2">
            <div className="text-gray-600">Course Name:</div>{" "}
            <div className="font-[500] ">Introduction to UI/UX</div>
          </div>
          <div className="flex gap-3 my-2">
            <img src={reviewBoy} className="h-12" alt="" />
            <div>
              <div className="font-[500]">Cris Walter </div>
              <div className="text-gray-500">3 days ago</div>
            </div>
          </div>
          <div className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            sapiente aliquam nulla libero doloremque qui? Quisquam cupiditate
          </div>
        </div>
        <div className="rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 h-full px-7 py-4 gap-3 ">
          <div className="flex justify-between my-1">
            <div className="text-gray-600 text-sm">Rating: ⭐⭐⭐⭐⭐</div>
            <div>
              <Ellipsis />
            </div>
          </div>
          <div className="flex gap-3 my-2">
            <div className="text-gray-600">Course Name:</div>{" "}
            <div className="font-[500] ">Introduction to UI/UX</div>
          </div>
          <div className="flex gap-3 my-2">
            <img src={reviewBoy} className="h-12" alt="" />
            <div>
              <div className="font-[500]">Cris Walter </div>
              <div className="text-gray-500">3 days ago</div>
            </div>
          </div>
          <div className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            sapiente aliquam nulla libero doloremque qui? Quisquam cupiditate
          </div>
        </div><div className="rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 h-full px-7 py-4 gap-3 ">
          <div className="flex justify-between my-1">
            <div className="text-gray-600 text-sm">Rating: ⭐⭐⭐⭐⭐</div>
            <div>
              <Ellipsis />
            </div>
          </div>
          <div className="flex gap-3 my-2">
            <div className="text-gray-600">Course Name:</div>{" "}
            <div className="font-[500] ">Introduction to UI/UX</div>
          </div>
          <div className="flex gap-3 my-2">
            <img src={reviewBoy} className="h-12" alt="" />
            <div>
              <div className="font-[500]">Cris Walter </div>
              <div className="text-gray-500">3 days ago</div>
            </div>
          </div>
          <div className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            sapiente aliquam nulla libero doloremque qui? Quisquam cupiditate
          </div>
        </div>

      </div>
    </>
  );
};

export default Review;
