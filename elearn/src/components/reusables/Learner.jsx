import React from 'react'
import smile from '../../assets/smile.png'

const Learner = () => {
  return (
    <>
    <div className="px-28  mb-8">
            <div className=" text-2xl font-[600] mb-6 ">Learners Review</div>
            <div className="flex gap-10">
              <div className="w-[25%]">
                <div className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                  ⭐ 4.6
                  <span className="text-gray-500 text-lg">(148,951 reviews)</span>
                </div>
    
                {/* Rating Bars */}
                <div className="mt-4 space-y-2 text-gray-600 text-sm">
                  {[
                    { stars: "★★★★★", percent: "80%" },
                    { stars: "★★★★☆", percent: "10%" },
                    { stars: "★★★☆☆", percent: "5%" },
                    { stars: "★★☆☆☆", percent: "3%" },
                    { stars: "★☆☆☆☆", percent: "2%" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-[60px]">{item.stars}</span>
                      <div className="w-[150px] bg-gray-200 h-2 rounded-full">
                        <div
                          className="bg-yellow-400 h-2 rounded-full"
                          style={{ width: item.percent }}
                        ></div>
                      </div>
                      <span>{item.percent}</span>
                    </div>
                  ))}
                </div>
              </div>
    
              <div className="w-[75%] space-y-6">
    
                <div className="border rounded-xl p-6 shadow-sm bg-white">
                  <div className="flex items-center gap-4">
                    <img src={smile} className="h-12 w-12 rounded-full" alt="profile" />
                    <div>
                      <div className="font-semibold text-gray-800">Mark Doe</div>
                      <div className="text-yellow-500 flex items-center gap-2">
                        ⭐ 5
                        <span className="text-gray-500 text-sm">
                          Reviewed on 22nd March, 2024
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    I was initially apprehensive, having no prior design experience. But the
                    instructor did an amazing job breaking down complex concepts into easily
                    digestible modules. The video lectures were engaging, and the real-world
                    examples really helped solidify my understanding.
                  </p>
                </div>
    
                <div className="border rounded-xl p-6 shadow-sm bg-white">
                  <div className="flex items-center gap-4">
                    <img src={smile} className="h-12 w-12 rounded-full" alt="profile" />
                    <div>
                      <div className="font-semibold text-gray-800">Mark Doe</div>
                      <div className="text-yellow-500 flex items-center gap-2">
                        ⭐ 5
                        <span className="text-gray-500 text-sm">
                          Reviewed on 22nd March, 2024
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    I was initially apprehensive, having no prior design experience. But the
                    instructor did an amazing job breaking down complex concepts into easily
                    digestible modules. The video lectures were engaging, and the real-world
                    examples really helped solidify my understanding.
                  </p>
                </div>
    
                <div className="border rounded-xl p-6 shadow-sm bg-white">
                  <div className="flex items-center gap-4">
                    <img src={smile} className="h-12 w-12 rounded-full" alt="profile" />
                    <div>
                      <div className="font-semibold text-gray-800">Mark Doe</div>
                      <div className="text-yellow-500 flex items-center gap-2">
                        ⭐ 5
                        <span className="text-gray-500 text-sm">
                          Reviewed on 22nd March, 2024
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    I was initially apprehensive, having no prior design experience. But the
                    instructor did an amazing job breaking down complex concepts into easily
                    digestible modules. The video lectures were engaging, and the real-world
                    examples really helped solidify my understanding.
                  </p>
                </div>
    
                <button className="border px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
                  View more Reviews
                </button>
              </div>
    
            </div>
          </div>
    </>
  )
}

export default Learner
