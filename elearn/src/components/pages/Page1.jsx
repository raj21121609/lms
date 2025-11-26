import React from 'react'
import Hero from '../page1/Hero'
import NumberStrip from '../page1/NumberStrip'
import Categories from '../page1/Categories'
import Courses from '../page1/Courses'
import Instructor from '../page1/Instructor'
import Comments from '../page1/Comments'
import Become from '../page1/Become'
import Become2 from '../page1/Become2'
import Navbar from '../page1/Navbar'
import Footer from '../page1/Footer'

const Page1 = () => {
  return (
    <>
        <Navbar/>
            <Hero/>
            <NumberStrip/>
            <Categories/>
            <Courses/>
            <Instructor/>
            <Comments/>
            <Become/>
            <Become2/>
            <Footer/>
    </>
  )
}

export default Page1
