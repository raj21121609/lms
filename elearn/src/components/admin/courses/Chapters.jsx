import React from 'react'
import {ChevronsUpDown} from 'lucide-react'

const Chapters = () => {
  return (
    <>
    <div className="bg-gray-100 h-full mt-4 mx-4 rounded-sm ">
        <div className="w-full">
          <table className="w-full px-4 py-4">
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
                  <div>Chapter</div>
                  <div className="items-center flex">
                    <ChevronsUpDown size={20} />
                  </div>
                </div>
              </th>
              <th className="p-4">
                <div className="flex">
                  <div>Title</div>
                  <div className="items-center flex">
                    <ChevronsUpDown size={20} />
                  </div>
                </div>
              </th>
              <th className="p-4">
                <div className="flex">
                  <div>Type</div>{" "}
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
                  <div>Price</div>{" "}
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
              <td className="p-4">1000</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
              <td className='p-4'>100</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
              <td className='p-4'>100</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
              <td className='p-4'>100</td>
            </tr>
            <tr className="border-b-1 border-gray-300">
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
              <td className='p-4'>100</td>
            </tr>
            <tr>
              <td className="p-4">#42y4r</td>
              <td className="p-4">SCB SJ</td>
              <td className="p-4">teacher</td>
              <td className="p-4">25 jan 2026</td>
              <td className="p-4">recieved</td>
              <td className="p-4">95.00</td>
              <td className='p-4'>100</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  )
}

export default Chapters
