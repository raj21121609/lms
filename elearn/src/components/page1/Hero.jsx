import React from 'react'
import bg from '../../assets/bg.png'
import girl from '../../assets/girl.png'
import no from '../../assets/no.png'
import dots from '../../assets/dots.png'
import compRate from '../../assets/compRate.png'
import people from '../../assets/people.png'

const Hero = () => {
  return (
    <>
      <div className='flex'>

        <div className='w-[60%] h-[570px]'>
          <div className='py-[130px] px-[90px]'>

            <h1 className='text-5xl font-bold'>
              Unlock Your Potential <br /> with Myway
            </h1>

            <p className='pt-4 text-xl leading-relaxed text-gray-700'>
              Welcome to Myway, where learning knows no bounds. We believe that
              education is the key to personal and professional growth, and we're
              here to guide you on your journey to success.
            </p>

            <div className="relative inline-flex items-center justify-center gap-4 group pt-6">

              <div
                className="absolute inset-0 opacity-30 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 
                rounded-xl blur-sm transition-all duration-500 group-hover:opacity-60 group-hover:blur-md"
              ></div>

              <a
                role="button"
                className="group relative inline-flex items-center justify-center text-base rounded-xl 
                bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 
                hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                href="#"
              >
                Get Started For Free

                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  height="10"
                  width="10"
                  fill="none"
                  className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                >
                  <path
                    d="M0 5h7"
                    className="transition opacity-0 group-hover:opacity-100"
                  ></path>
                  <path
                    d="M1 1l4 4-4 4"
                    className="transition group-hover:translate-x-[3px]"
                  ></path>
                </svg>
              </a>
            </div>

          </div>
        </div>

        <div className="relative w-[40%] h-[570px]">
          <img className='absolute z-20 w-[353px] left-[98px] top-[59px]' src={girl} alt="" />
          <img className='absolute z-30 w-[230px] right-[360px] top-[360px]' src={no} alt="" />
          <img className='absolute z-0 w-[110px] top-[300px] left-[410px]' src={dots} alt="" />
          <img className='absolute z-30 w-[180px] top-[30px] left-[350px]' src={compRate} alt="" />
          <img className='absolute z-30 w-[175px] top-[95px] right-[410px]' src={people} alt="" />
          <img className='absolute z-10 w-[420px] top-[90px] left-[60px]' src={bg} alt="" />
        </div>

      </div>
      <div className='h-[120px]'></div>
    </>
  )
}

export default Hero
