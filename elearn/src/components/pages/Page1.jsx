import React, { useEffect,useState } from "react";
import Hero from "../page1/Hero";
import NumberStrip from "../page1/NumberStrip";
import Categories from "../page1/Categories";
import Courses from "../page1/Courses";
import Instructor from "../page1/Instructor";
import Comments from "../page1/Comments";
import Become from "../page1/Become";
import Become2 from "../page1/Become2";
import Navbar from "../page1/Navbar";
import Nav2 from "../page2/Nav2";
import Footer from "../page1/Footer";
import ClickSpark from "../animations/ClickSpark";
import axios from 'axios'


const Page1 = () => {
  let [isLoggedIn, setisLoggedIn] = useState(false)
  useEffect(()=>{
    const token = localStorage.getItem('access')
    if (token){
      setisLoggedIn(true)
    }
  },[])

  return (
    <>
      <ClickSpark
        sparkColor="#4A90E2"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {isLoggedIn?<Nav2/>:<Navbar/>}
        <Hero />
        <NumberStrip />
        <Categories />
        <Courses text="Top Courses" />
        <Instructor seeActive={true} text="Top Instructors" />
        <Comments />
        <Become />
        <Become2 />
        <Footer />
      </ClickSpark>
    </>
  );
};

export default Page1;
