import { useState, useRef, useEffect } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setOpen(!open);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      {/* Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-between gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 shadow-sm text-sm"
      >
        Relevance
        {/* Down Arrow SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg text-gray-700 z-20">
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
            Relevance
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
            Popularity
          </div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
            Latest
          </div>
        </div>
      )}
    </div>
  );
}
