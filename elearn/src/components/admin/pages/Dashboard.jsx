import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../../api/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  useEffect(() => {
    const get_req = async () => {
      try {
        const res = await api.get("http://127.0.0.1:8000/api/course_list/");
        setdata(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    get_req();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          onClick={() => navigate("/admin/dashboard/course_add")}
        >
          Add Course
        </button>
      </div>
      <div className="flex flex-wrap gap-5">
        {data.map((item) => {
          return (
            <div onClick={() => {}}>
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 w-full max-w-sm">
                <div className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  Free
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h2>

                <div className="text-2xl font-bold mb-4">₹{item.price}</div>

                <div className="h-[1px] bg-gray-200 mb-4"></div>

                <div className="grid grid-cols-3 gap-y-6 text-center">
                  <div>
                    <div className="text-lg font-semibold">13</div>
                    <div className="text-sm text-gray-500">Chapters</div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold">254</div>
                    <div className="text-sm text-gray-500">Orders</div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold">25</div>
                    <div className="text-sm text-gray-500">Certificates</div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold">25</div>
                    <div className="text-sm text-gray-500">Reviews</div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold">500</div>
                    <div className="text-sm text-gray-500">Added to Shelf</div>
                  </div>

                  <div>
                    <div className="text-lg font-semibold">Active</div>
                    <div className="text-sm text-gray-500">Status</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
