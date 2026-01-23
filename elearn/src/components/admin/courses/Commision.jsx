import React from "react";
import { ArrowUpNarrowWide, ChevronsUpDown } from "lucide-react";

const Commision = () => {
  return (
    <>
      <div className="flex justify-between gap-10 mt-4 mx-4">
        <div className="flex rounded-xl shadow-md border border-gray-200 w-full bg-gray-100 px-3 py-4 items-center gap-3">
          <ArrowUpNarrowWide size={45} className="text-green-700 text-5xl " />
          <div>
            <div className="text-xl font-medium">$1K</div>
            <div className="text-gray-700">Life time courses commision</div>
          </div>
        </div>
        <div className="flex rounded-xl shadow-md border border-gray-200 bg-gray-100 px-3 py-4 w-full items-center gap-3">
          <ArrowUpNarrowWide size={45} className="text-green-700" />
          <div>
            <div className="text-xl font-medium">$1K</div>
            <div className="text-gray-700">Life time courses commision</div>
          </div>
        </div>
        <div className="flex rounded-xl shadow-md border border-gray-200 bg-gray-100 px-3 py-4 w-full items-center gap-3">
          <ArrowUpNarrowWide size={45} className="text-green-700" />
          <div>
            <div className="text-xl font-medium">$1K</div>
            <div className="text-gray-700">Life time courses commision</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-full mt-4 mx-4 rounded-sm ">
        <div className="w-full">
          <table className="w-full px-4 py-4">
            <tr className="">
              <th className="p-4">
                <div className="flex">
                  <div>Order ID</div>
                  <div className="items-center flex">
                    <ChevronsUpDown size={20} />
                  </div>
                </div>
              </th>
              <th className="p-4">
                <div className="flex">
                  <div>Customer</div>
                  <div className="items-center flex">
                    <ChevronsUpDown size={20} />
                  </div>
                </div>
              </th>
              <th className="p-4">
                <div className="flex">
                  <div>Type</div>
                  <div className="items-center flex">
                    <ChevronsUpDown size={20} />
                  </div>
                </div>
              </th>
              <th className="p-4">
                <div className="flex">
                  <div>Date</div>{" "}
                  <div className="items-center flex">
                    <ChevronsUpDown size={20} />
                  </div>
                </div>
              </th>
              <th className="p-4">
                <div className="flex">
                  <div>Status</div>{" "}
                  <div className="items-center flex">
                    <ChevronsUpDown size={20} />
                  </div>
                </div>
              </th>
              <th className="p-4">
                <div className="flex">
                  <div>Commission</div>{" "}
                  <div className="items-center flex">
                    <ChevronsUpDown size={20} />
                  </div>
                </div>
              </th>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
            </tr>
            <tr>
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Commision;
