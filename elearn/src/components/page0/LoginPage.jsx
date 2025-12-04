import React from 'react'
import loginpageImage from "../../assets/loginpageImage.png";
import { useState } from 'react'
import { ArrowBigRight } from "lucide-react";
const LoginPage = () => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
  return (
   <>
   <div className= 'flex h-screen overflow-hidden bg-white'>
    <div className='w-1/2 ml-20'>
        <p className='text-center mt-23 font-[700] text-xl'>Sign In to Your Account</p>
        <form>
            <div className='font-[500] mt-10'>
                <label>Email</label> <br></br>
                <input className='mt-1 h-11 w-[490px] border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black' type="email" placeholder='Username or EmailId' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className='font-[500] mt-5'>
                <label>Password</label> <br></br>
                <input className='mt-1 h-11 w-[490px] border border-gray-300 rounded-md px-3 text-sm focus:ring-1 focus:ring-black' type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button
            type="submit"
            className="w-1/4 mt-8 bg-black text-white py-3 rounded-md flex items-center justify-center gap-2 hover:opacity-90"
          >
            Sign In <ArrowBigRight size={20} />
          </button>
        </form>
        
        <div className="mt-6 mb-4 flex items-center gap-3">
          <hr className="flex-1 border-gray-300" />
          <span className="text-sm text-gray-500">Sign up with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

       < div className="flex justify-center gap-4 mt-2">
          <button className="border px-6 py-2 bg-gray-200 rounded-md flex items-center gap-2 text-sm">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" className="h-4 " />
            Facebook
          </button>

          <button className="border px-6 py-2  bg-gray-200 rounded-md flex items-center gap-2 text-sm">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg" className="h-4" />
            Google
          </button>

          <button className="border px-6 py-2 bg-gray-200 rounded-md flex items-center gap-2 text-sm">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg" className="h-4" />
            Microsoft
          </button>
        </div>

    </div>
    <div className='w-1/2'><img className='h-full w-full object-cover' src={loginpageImage} alt="" /></div>
   </div>
   </>
  )
}

export default LoginPage;