import React from 'react'
import Card from './Card'
import Footer from '../../components/page1/Footer'

const Shop = () => {
  return (
    <>
    <div className='flex px-20 gap-[80px]'>
        <div className='h-[600px] w-[70%] '>
            <div className='flex gap-5 items-baseline'>
                <div className='text-3xl font-[600] mt-8'>Shopping Cart</div>
                <div className='flex gap-3 text-[15px] font-[400]'>Categories {'>'} Details {'>'} <div className='text-blue-600 text-[15px] font-[400]'> Shopping Cart</div></div>
            </div>
            <div className='text-[16px] text-gray-700 mt-12'>1 Course in cart</div>
            <div className="h-[1px] my-2 w-[800px] bg-gray-200"></div>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
        <div className='h-[600px] w-[30%]'>
            <div className='mt-14 text-[23px] font-[600] mb-4'>Order Details</div>
            <div>
                <div className='bg-gray-100 py-6 h-[250px] w-[300px] px-4 border-2 border-gray-300 rounded-2xl flex-col flex justify-around'>
                    <div className='flex justify-between'>
                        <div className='text-[19px] text-gray-700'>Price</div>
                        <div className='text-[19px] font-[500]'>₹149.00</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-[19px] text-gray-700'>Discount</div>
                        <div className='text-[19px] font-[500]'>-₹39.00</div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='text-[19px] text-gray-700'>Tax</div>
                        <div className='text-[19px] font-[500]'>₹20.00</div>
                    </div>
                    <div className="h-[1px] my-4 w-full bg-gray-200"></div>
                    <div className='flex justify-between'>
                        <div className='text-[21px] font-[600]'>Total</div>
                        <div className='text-[21px] font-[600]'>₹290.00</div>
                    </div>
                </div>
            </div>
            <button className='bg-black text-white rounded-md h-[50px] w-[300px] mt-4'>Proceed to Checkout</button>
        </div>
    </div>
    <div className='h-[250px]'></div>
    <Footer></Footer>
    </>
  )
}

export default Shop
