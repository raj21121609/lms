import { useState } from "react";

export default function CourseAccordion() {
  const items = [
    { title: "Introduction to UX Design", lessons: 5, time: "1 hour" },
    { title: "Basics of User-Centered Design", lessons: 5, time: "1 hour" },
    { title: "Elements of User Experience", lessons: 5, time: "1 hour" },
    { title: "Visual Design Principles", lessons: 5, time: "1 hour" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white border rounded-lg shadow-sm">
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-5 text-left"
          >
            <span className="text-lg font-medium">{item.title}</span>

            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <span>{item.lessons} Lessons</span>
              <span>{item.time}</span>

              <span
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </div>
          </button>

          {openIndex === index && (
            <div className="p-5 bg-gray-50 text-gray-600">
              <p>
                Content for <b>{item.title}</b> goes here.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
