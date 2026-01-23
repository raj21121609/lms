import axios from "axios";
import React from "react";
import api from "../../../api/api";
import { useState } from "react";
import { useNavigate } from "react-router";

const CourseAddition = () => {
  const [Thumbnail, setThumbnail] = useState(null);
  const [data, setdata] = useState({
    price: 0,
    title: "",
    about_course: "",
    course_description: "",
    certification: "",
    language: "",
  });
  const [isSubmitted, setisSubmitted] = useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();

    const formdata = new FormData();

    if (Thumbnail) {
      formdata.append("thumbnail", Thumbnail);
    }

    Object.entries(data).forEach(([key, value]) => {
      formdata.append(key, value);
    });

    try {
      await api.post("/api/Course_register/", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setisSubmitted(true)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <form onSubmit={submitHandler}>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Add New Course
            </h1>
            <p className="text-sm text-gray-500">
              Ready to share your knowledge? Create your course here.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded-md text-sm">
              Save Draft
            </button>
            <button
              type="submit"
              value="sumbit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm cursor-pointer"
              onClick={() => {
                if (isSubmitted) {
                  navigate('/admin/dashboard')
                }
              }}
            >
              Create Course
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-[70%] space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-semibold text-gray-700 mb-4">
                Basic Information
              </h2>
              <div className=" gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Course Title"
                  className="border rounded-md px-3 py-2 text-sm w-full bg-gray-100"
                  name="title"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="number"
                  placeholder="Price ($)"
                  className="border rounded-md px-3 py-2 text-sm w-full bg-gray-100"
                  name="price"
                  onChange={handleChange}
                />
                <select
                  className="border rounded-md px-3 py-2 text-sm w-full bg-gray-100"
                  name="language"
                  onChange={handleChange}
                >
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>

              <textarea
                placeholder="Briefly introduce the course..."
                className="border rounded-md px-3 py-2 text-sm w-full h-24 bg-gray-100"
                name="about_course"
                onChange={handleChange}
              />
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-semibold text-gray-700 mb-4">
                Course Description
              </h2>
              <textarea
                placeholder="Detailed syllabus and learning outcomes..."
                className="border rounded-md px-3 py-2 text-sm w-full h-40 bg-gray-100"
                name="course_description"
                onChange={handleChange}
              />
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-semibold text-gray-700 mb-4">
                Certification Details
              </h2>
              <textarea
                placeholder="Explain what students will receive upon completion..."
                className="border rounded-md px-3 py-2 text-sm w-full h-28 bg-gray-100"
                name="certification"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="w-[30%] space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-semibold text-gray-700 mb-4">
                Course Thumbnail
              </h2>

              <input
                type="file"
                accept="image/*"
                name="thumbnail"
                onChange={(e) => setThumbnail(e.target.files[0])}
                className="mb-3"
              />

              <div className="border-2 border-dashed rounded-md h-40 flex flex-col justify-center items-center text-sm text-gray-500">
                <p>Drag & drop file</p>
                <p className="text-xs mt-1">PNG, JPG, max 5MB</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-semibold text-gray-700 mb-4">Settings</h2>

              <div className="flex justify-between items-center mb-3">
                <span className="text-sm">Public Status</span>
                <input type="checkbox" className="toggle" />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Certificate</span>
                <input type="checkbox" className="toggle" />
              </div>
            </div>

            <div className="bg-blue-600 rounded-lg p-4 text-white shadow-sm">
              <p className="text-sm mb-2">Preview Card</p>
              <div className="bg-blue-500 rounded-md h-32"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CourseAddition;
