import React from "react";
import intro from "../../assets/intro.png";
import coupon from "../../assets/coupon.png";
import Footer from "../page1/Footer";
import visa from "../../assets/visa.png";
import paypal from "../../assets/paypal.png";

const Checkout = () => {
  return (
    <>
      <div className="flex px-20 pb-10">
        <div className="w-[70%] min-h-[600px]">
          <div className="flex gap-5 items-baseline">
            <div className="text-3xl font-[600] mt-8">Checkout Page</div>
            <div className="flex gap-3 text-[15px] font-[400]">
              Details {">"} Shopping Cart {">"}
              <div className="text-blue-600 text-[15px] font-[400]">
                Checkout
              </div>
            </div>
          </div>

          <div className="h-[600px] w-[800px] p-4 border-2 border-gray-300 mt-6 rounded-lg">
            {/* Country + State */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700 mb-1 font-medium">
                  Country
                </label>
                <input
                  type="text"
                  placeholder="Enter Country"
                  className="border rounded-md h-10 px-3 outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-gray-700 mb-1 font-medium">
                  State/Union Territory
                </label>
                <input
                  type="text"
                  placeholder="Enter State"
                  className="border rounded-md h-10 px-3 outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6">
              <div className="text-[19px] font-[600]">Payment Method</div>

              {/* Credit/Debit Card */}
              <div className="mt-3 border rounded-lg p-4 bg-gray-100">
                <div className="flex justify-between">
                  <label className="flex items-center gap-3 text-[17px] font-medium">
                    <input type="radio" name="payment" defaultChecked />
                    Credit/Debit Card
                  </label>

                  <img src={visa} className="h-6" alt="" />
                </div>

                {/* Card Fields */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col col-span-2">
                    <label className="text-gray-700 mb-1 font-medium">
                      Name of Card
                    </label>
                    <input
                      type="text"
                      placeholder="Name of card"
                      className="border rounded-md h-10 px-3 outline-none bg-white focus:border-blue-500"
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="text-gray-700 mb-1 font-medium">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="border rounded-md h-10 px-3 outline-none bg-white focus:border-blue-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-700 mb-1 font-medium">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="border rounded-md h-10 px-3 outline-none bg-white focus:border-blue-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-700 mb-1 font-medium">
                      CVC/CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="border rounded-md h-10 px-3 outline-none bg-white focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* PayPal Option */}
              <div className="mt-4 border rounded-lg p-4 flex justify-between items-center">
                <label className="flex items-center gap-3 text-[17px] font-medium">
                  <input type="radio" name="payment" />
                  PayPal
                </label>
                <img src={paypal} className="h-6" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] min-h-[600px]">
          <div className="mt-14 text-[23px] font-[600] mb-4">Order Details</div>

          <div className="h-[120px] w-[350px] bg-gray-100 border-2 border-gray-300 rounded-2xl flex items-center px-2 mt-4">
            <img
              className="w-[100px] h-[100px] rounded-md mr-4"
              src={intro}
              alt=""
            />
            <div className="text-[14px]">
              <div className="text-blue-500">Design</div>
              <div className="font-[600]">
                Introduction to User <br /> Experience Design
              </div>
              <div className="text-gray-700">155 Lectures . 22 Total Hours</div>
              <div className="font-[700]">₹149.00</div>
            </div>
          </div>

          <div className="h-15 w-[350px] bg-gray-100 border-2 border-gray-300 rounded-2xl flex gap-4 items-center px-3 mt-4">
            <img src={coupon} className="w-8" alt="" />
            <div className="text-[16px]">APPLY COUPON CODE</div>
          </div>

          <div className="bg-gray-100 py-6 h-[250px] w-[350px] px-4 mt-4 border-2 border-gray-300 rounded-2xl flex flex-col justify-around">
            <div className="flex justify-between">
              <div className="text-[19px] text-gray-700">Price</div>
              <div className="text-[19px] font-[500]">₹149.00</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[19px] text-gray-700">Discount</div>
              <div className="text-[19px] font-[500]">-₹39.00</div>
            </div>
            <div className="flex justify-between">
              <div className="text-[19px] text-gray-700">Tax</div>
              <div className="text-[19px] font-[500]">₹20.00</div>
            </div>
            <div className="h-[1px] my-4 w-full bg-gray-200"></div>
            <div className="flex justify-between">
              <div className="text-[21px] font-[600]">Total</div>
              <div className="text-[21px] font-[600]">₹290.00</div>
            </div>
          </div>

          <button className="bg-black text-white rounded-md h-[50px] w-[350px] mt-4 mb-10">
            Proceed to Checkout
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;
