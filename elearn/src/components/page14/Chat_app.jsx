import React from "react";
import { LucideShare2, ListFilter } from "lucide-react";
import Footer from "../page1/Footer";
import Dropdown from "../reusables/Dropdown";
import guy from "../../assets/guy.png";
import smile from "../../assets/smile.png";

const Chat_app = () => {
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
            <div className="text-2xl font-[500]">Messages</div>
            <div className="text-[14px]">(12)</div>
          </div>
          <div className="flex justify-between mt-6">
            <div>
              <div class="flex items-center border w-80 pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden">
                <input
                  class="w-full h-full pl-5 outline-none placeholder-gray-500 text-sm"
                  placeholder="Search for products"
                  type="text"
                />
                <svg
                  fill="#6B7280"
                  viewBox="0 0 30 30"
                  height="22"
                  width="22"
                  y="0px"
                  x="0px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
                <div class="h-6 w-px bg-gray-500/50"></div>
                <svg
                  fill="#6B7280"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="0 0 32.00 32.00"
                  width="20px"
                >
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    stroke-width="0.064"
                    stroke="#CCCCCC"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <title>microphone</title>
                    <desc>Created with Sketch Beta.</desc>
                    <defs></defs>
                    <g
                      fill-rule="evenodd"
                      fill="none"
                      stroke-width="0.00032"
                      id="Page-1"
                    >
                      <g
                        fill="#6B7280"
                        transform="translate(-105.000000, -307.000000)"
                        id="Icon-Set"
                      >
                        <path
                          id="microphone"
                          d="M111,314 C111,311.238 113.239,309 116,309 C118.761,309 121,311.238 121,314 L121,324 C121,326.762 118.761,329 116,329 C113.239,329 111,326.762 111,324 L111,314 L111,314 Z M116,331 C119.866,331 123,327.866 123,324 L123,314 C123,310.134 119.866,307 116,307 C112.134,307 109,310.134 109,314 L109,324 C109,327.866 112.134,331 116,331 L116,331 Z M127,326 L125,326 C124.089,330.007 120.282,333 116,333 C111.718,333 107.911,330.007 107,326 L105,326 C105.883,330.799 110.063,334.51 115,334.955 L115,337 L114,337 C113.448,337 113,337.448 113,338 C113,338.553 113.448,339 114,339 L118,339 C118.552,339 119,338.553 119,338 C119,337.448 118.552,337 118,337 L117,337 L117,334.955 C121.937,334.51 126.117,330.799 127,326 L127,326 Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div>Sort By</div>
              <div>
                <Dropdown />
              </div>
              <div>
                <button className="flex items-center justify-between gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm text-sm">
                  <ListFilter height={16} width={16} /> Filter
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-7">
            <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 h-[520px] flex flex-col">
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <div className="flex items-center gap-3">
                  <img
                    src={guy}
                    alt="user"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-[500]">Ronald Richards</p>
                    <p className="text-xs text-gray-500">Today</p>
                  </div>
                </div>
                <span className="text-gray-400 text-xl">⋯</span>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-[#FAFAFB]">
                <div className="flex justify-end">
                  <div className="max-w-[65%] bg-gray-900 text-white px-4 py-2 rounded-xl text-sm">
                    Hello
                    <div className="text-[10px] text-gray-300 text-right mt-1">
                      10:25 am
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[65%] bg-gray-900 text-white px-4 py-2 rounded-xl text-sm">
                    Just wanted to tell you that I started your course and it’s
                    going great!!
                    <div className="text-[10px] text-gray-300 text-right mt-1">
                      10:25 am
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <img
                    src={smile}
                    alt="teacher"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="max-w-[65%] bg-gray-100 px-4 py-2 rounded-xl text-sm">
                    Hello! Thank you for reaching out to me. Feel free to ask
                    any questions regarding the course, I will try to reply
                    ASAP.
                    <div className="text-[10px] text-gray-500 mt-1">
                      12:23 pm
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t px-4 py-3 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Type your message"
                  className="flex-1 border rounded-lg px-4 py-2 text-sm outline-none"
                />
                <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-8"></div>
      <Footer />
    </>
  );
};

export default Chat_app;
