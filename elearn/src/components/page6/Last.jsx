import React from 'react'
import Nav2 from '../page2/Nav2'
import Footer from '../page1/Footer'
import correct from '../../assets/correct.png'

const Last = () => {
  return (
    <>
      <Nav2 />

      <div className="flex flex-col items-center justify-center py-20">
        <img src={correct} className="w-38" alt="success" />
        <h1 className="text-3xl font-[700] mt-6">Order Complete</h1>
        <p className="text-gray-600 text-lg mt-2">
          You will receive a confirmation email soon!
        </p>
      </div>

      <Footer />
    </>
  )
}

export default Last
