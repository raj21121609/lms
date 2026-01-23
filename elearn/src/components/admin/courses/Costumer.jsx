import React from "react";
import { ChevronsUpDown } from "lucide-react";

const Costumer = () => {
  return (
    <>
      <div>
        <div className="bg-gray-100 h-full mt-4 mx-4 rounded-sm ">
          <div className="w-full">
            <table className=" w-full px-4 py-4">
            <tr className="">
              <th className="p-4">
                <div className="flex">
                  <div>ID</div>
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
                  <div>Country</div>{" "}
                  <div className="items-center flex">
                    <ChevronsUpDown size={20} />
                  </div>
                </div>
              </th>
              <th className="p-4">
                <div className="flex">
                  <div>Joined</div>{" "}
                  <div className="items-center flex">
                    <ChevronsUpDown size={20} />
                  </div>
                </div>
              </th>
              <th className="p-4">
                <div className="flex">
                  <div>Total Amount</div>{" "}
                  <div className="items-center flex">
                    <ChevronsUpDown size={20} />
                  </div>
                </div>
              </th>
              <th className="p-4">
                <div className="flex">
                  <div>Last Order</div>{" "}
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
              <td className="p-4">645278</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
              <td className="p-4">645278</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
              <td className="p-4">645278</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
              <td className="p-4">645278</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
              <td className="p-4">645278</td>
            </tr>
            <tr>
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
              <td className="p-4">645278</td>
            </tr>
          </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Costumer;
