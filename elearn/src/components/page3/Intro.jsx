import React from "react";
import intro from "../../assets/intro.png";
import logo from "../../assets/logos.png";
import smile from "../../assets/smile.png";
import { Globe, Award, GraduationCap, Play } from "lucide-react";
import CourseAccordion from "../reusables/CourseAccordion";
import Learner from "../reusables/Learner";

const Intro = () => {

  
  return (
    <>
      <div className="bg-gradient-to-b flex from-[#E3E7F0] to-transparent px-20 w-full">

        <div className="h-auto w-[75%] p-6">

          <div className="flex gap-2 text-gray-700">
            <span>Home &gt;</span>
            <span>Categories &gt;</span>
            <span className="text-blue-700">Introduction To User Experience Design</span>
          </div>

          <br />

          <div className="text-[38px] font-[700]">
            Introduction to User Experience Design
          </div>

          <div className="text-md mt-1 leading-relaxed text-gray-700">
            The course is meticulously crafted to provide you with a foundational understanding of the
            principles, methodologies, and tools that drive exceptional user experiences in the digital
            landscape.
          </div>

          <div className="flex gap-2 items-center mt-3">
            <div className="text-yellow-400">4.0</div>
            <div className="flex text-yellow-400 text-lg mt-1">★★★★☆</div>
            <div className="text-gray-700">(651651 ratings) |</div>
            <div className="text-gray-700">22 Total Hours, 155 Lectures, All Levels</div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <img src={smile} className="h-12 w-12" alt="" />
            <div className="text-gray-800">Created by</div>
            <div className="text-blue-600">Ronal Richards</div>
          </div>

          <div className="flex gap-2 mt-4 text-gray-700">
            <Globe />
            <div>English, Spanish, Italian, German</div>
          </div>

          <div className="flex gap-4 my-4">
            {["Description", "Instructor", "Syllabus", "Reviews"].map((tab) => (
              <button
                key={tab}
                className="border-2 border-gray-300 p-4 w-[120px] rounded-lg"
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="h-[1px] w-full bg-gray-200"></div>

          <div className="mt-8">
            <div className="text-2xl font-[600]">Course Description</div>
            <div className="text-gray-800 leading-relaxed mt-2">
              This interactive e-learning course will introduce you to User Experience (UX) design...
            </div>
          </div>

          <div className="mt-8">
            <div className="text-2xl font-[600]">Certification</div>
            <div className="text-gray-800 leading-relaxed mt-2">
              At Myway, we understand the significance of formal recognition...
            </div>
          </div>

          <div className="h-[1px] my-4 w-full bg-gray-200"></div>

          <div className="mt-4">
            <div className="text-2xl font-[600] mb-6">Instructor</div>
            <div className="text-2xl font-[500] text-blue-800">Ronald Richards</div>
            <div className="text-xl text-gray-700">UI/UX Designer</div>

            <div className="flex mt-4">
              <img src={smile} className="mr-4" alt="" />
              <div>
                <div className="flex gap-3">
                  <Award /> 40,445 Reviews
                </div>
                <div className="flex gap-3">
                  <GraduationCap /> 500 Students
                </div>
                <div className="flex gap-3">
                  <Play /> 15 Courses
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] my-4 w-full bg-gray-200"></div>

          <div className="mt-6">
            <div className="text-2xl font-[600] mb-4">Syllabus</div>

            <CourseAccordion />

            <div className="bg-gray-200 h-[1px] w-full mt-6"></div>
          </div>

        </div>

        <div className="w-[25%] h-auto">
          <div className="h-[440px] p-4 m-6 w-[300px] border-2 rounded-xl shadow-lg border-gray-200 bg-white">
            <img src={intro} alt="" />

            <div className="flex gap-2 items-center py-4">
              <div className="text-2xl font-medium">₹150</div>
              <div className="text-gray-500 line-through">₹300</div>
              <div className="text-xl text-green-500">50% Off</div>
            </div>

            <button className="w-full rounded-sm py-2 bg-[#2C3E50] text-white">
              Add To Cart
            </button>

            <button className="my-3 w-full rounded-sm py-2 bg-white text-[#2C3E50] border-2">
              Buy Now
            </button>

            <div className="h-[1px] w-full bg-gray-200"></div>

            <div className="py-2">
              <div className="text-lg mb-1">Share</div>
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Learner/>
    </>
  );
};

export default Intro;
