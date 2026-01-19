import { useState } from "react";
import { LucideShare2 } from "lucide-react";
import guy from "../../assets/guy.png";
import Nav2 from "../page2/Nav2";
import Footer from "../page1/Footer";
import api from "../../api/api"
import toast from "react-hot-toast";
import React from "react";

const ProfileOne = () => {
  const [image, setImage] = useState(null);
  const [data, setdata] = useState({
    first_name: "",
    last_name: "",
    headline: "",
    tutor_description: "",
    language: "",
    image_label:"",
    profile_pic:"",
    areas_of_experience: "",
    professional_experience: "",
    website: "",
    x: "",
    linkdin: "",
    youtube: "",
    facebook: "",
  })

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setdata({
        ...data,
        'profile_pic':file,
      })
      setImage(URL.createObjectURL(file));
    }
  };

  function handleChange(e){
    setdata({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData()
    
    Object.keys(data).forEach((key)=>{
      if (data[key]){
        formdata.append(key,data[key])
      }
    })
    
    try {
      await api.post('http://127.0.0.1:8000/api/Tutor_register/',
        formdata
      )
      toast.success("profile saved successfully")
    } catch (error) {
      console.error(error)
    }
  }

  const languages = ["English", "German", "Spanish", "French", "Italian"];

  return (
    <>
      <Nav2 />
      <div className="flex ">
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
            <button className="bg-white cursor-pointer mx-auto flex text-md font-[500] mt-3  px-6 py-2 rounded-md border border-gray-400">
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

        <div className="w-[70%] h-full mt-8 mr-5 pr-20">
          <form onSubmit={handleSubmit}>
          <div className="w-full h-full  border border-gray-400 rounded-lg ">
              <div className="flex gap-30 mt-5 ">
                <div className="ml-6">
                  <label htmlFor="first_name">First Name</label>
                  <br />
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter your first name"
                    className="py-2 pl-2 text-sm mt-2 border w-xs border-gray-400 rounded-sm"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="last_name">Last Name</label>
                  <br />
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter your last name"
                    className="py-2 pl-2 text-sm mt-2 border w-xs border-gray-400 rounded-sm"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="ml-6 mt-5">
                <label htmlFor="Headline">Headline</label>
                <br />
                <input
                  type="text"
                  id="Headline"
                  name="headline"
                  placeholder="Headline"
                  className="py-2 pl-2 text-sm mt-2 border w-xs border-gray-400 rounded-sm"
                  onChange={handleChange}
                />
              </div>
              <div className="ml-6 mt-5">
                <label htmlFor="Description">Description</label>
                <br />
                <input
                  type="text"
                  id="Description"
                  name="tutor_description"
                  className="pt-2 pb-20 pl-2 text-sm mt-2 border w-3xl mr-10 border-gray-400 rounded-sm"
                  onChange={handleChange}
                />
              </div>
              <div className="ml-6 mt-5">
                <label htmlFor="Language">Language</label>
                <br />
                <select
                  name="language"
                  id="language"
                  className="py-2 pl-2 text-sm mt-2 border w-xs border-gray-400 rounded-sm mb-7"
                  onChange={handleChange}
                >
                  {languages.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>

              <div className="ml-6 mt-5">
                <label htmlFor="aoe">Area of expertise</label>
                <br />
                <textarea
                  id="aoe"
                  name="areas_of_experience"
                  placeholder=""
                  rows={10}
                  className="pt-2 pl-2 text-sm mt-2 border w-3xl mr-10 border-gray-400 rounded-sm resize-none"
                  onChange={handleChange}
                />
              </div>

              <div className="ml-6 mt-5 mb-5">
                <label htmlFor="pe">Professional Experience</label>
                <br />
                <input
                  type="text"
                  id="pe"
                  name="professional_experience"
                  placeholder="Enter your Professional experience"
                  className="pt-2 pb-20 pl-2 text-sm mt-2 border w-3xl mr-10 border-gray-400 rounded-sm"
                  onChange={handleChange}
                />
              </div>
          </div>

          <div className="w-full h-full  mt-3 border border-gray-400 rounded-lg ">
            <div className="w-full h-full flex justify-center p-6">
              <div className="bg-white w-full max-w-4xl p-6 rounded-xl shadow-sm ">
                <h2 className="">Image Preview</h2>

                <div className="w-full h-64 bg-gray-100 border mt-2 border-gray-400 rounded-xl flex items-center justify-center overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt="Preview"
                      className="h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-400 text-sm flex flex-col items-center">
                      <svg
                        className="w-12 h-12 mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeWidth="2"
                          d="M3 5h18M3 19h18M5 5v14M19 5v14M8 10h8M8 14h5"
                        />
                      </svg>
                      No Image Selected
                    </div>
                  )}
                </div>

                <div className="mt-6">
                  <p>Add/Change Image</p>

                  <div className="flex items-center gap-4">
                    <input
                      type="text"
                      placeholder="Image label"
                      className="py-2 pl-2 text-sm mt-2 border w-full border-gray-400 rounded-sm"
                    />

                    <label className="px-5 py-2 border border-gray-400 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                      Upload Image
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleUpload}
                      />
                    </label>
                  </div>

                  <button className="mt-5 bg-[#0a132b] text-white px-6 py-3 rounded-lg text-sm">
                    Save Image
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full mt-3 border border-gray-400 rounded-lg ">
            <div className="ml-6  ">
              <p className="ml-6 mt-5 font-medium">Links</p>
                <div className=" mt-5 ml-6">
                  <div className="mt-5">
                    <label htmlFor="Website">Website</label>
                    <br />
                    <input
                      type="url"
                      id="Website"
                      name="website"
                      placeholder="Enter your website URL"
                      className="py-2 pl-2 text-sm mt-2 border w-2xl border-gray-400 rounded-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="twitter">X(Formerly twitter)</label>
                    <br />
                    <input
                      type="url"
                      id="twitter"
                      name="x"
                      placeholder="Enter your twitter URL"
                      className="py-2 pl-2 text-sm mt-2  border w-2xl border-gray-400 rounded-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="linkdin">Linkdin</label>
                    <br />
                    <input
                      type="url"
                      id="linkdin"
                      name="linkdin"
                      placeholder="Enter your linkdin URL"
                      className="py-2 pl-2 text-sm mt-2  border w-2xl border-gray-400 rounded-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="youtube">Youtube</label>
                    <br />
                    <input
                      type="url"
                      id="youtube"
                      name="youtube"
                      placeholder="Enter your youtube URL"
                      className="py-2 pl-2 text-sm  mt-2  border w-2xl border-gray-400 rounded-sm"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="facebook">Facebook</label>
                    <br />
                    <input
                      type="url"
                      id="facebook"
                      name="facebook"
                      placeholder="Enter your facebook URL"
                      className="py-2 pl-2 text-sm  mt-2  border mb-5 w-2xl border-gray-400 rounded-sm"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full h-16 mb-6 ml-5">
                  <button className="mt-5 bg-[#0a132b] text-white px-6 py-3 rounded-lg text-sm" type="submit" value="submit">
                    Submit
                  </button>
                </div> 
            </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-20"></div>
      <Footer />
    </>
  );
};

export default ProfileOne;