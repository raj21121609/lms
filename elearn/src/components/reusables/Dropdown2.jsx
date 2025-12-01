import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const ratings = [5, 4, 3, 2, 1];
const chapterRanges = ["1-10", "10-15", "15-20", "20-25"];
const priceRanges = ["₹0 - ₹99", "₹100 - ₹299", "₹300 - ₹499", "₹500+"]; 
const categories = ["Design", "Development", "Marketing", "Business"];

export default function FilterDropdown() {
  const [openRating, setOpenRating] = useState(true);
  const [openChapters, setOpenChapters] = useState(true);
  const [openPrices, setOpenPrices] = useState(true);
  const [openCategories, setOpenCategories] = useState(true);

  const [selectedChapters, setSelectedChapters] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleSelection = (prev, setter, value) => {
    setter(prev.includes(value) 
      ? prev.filter((v) => v !== value) 
      : [...prev, value]
    );
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white">

      {/* ------------------ RATING ------------------ */}
      <div className="mb-6">
        <button
          className="flex justify-between w-full text-lg font-medium"
          onClick={() => setOpenRating(!openRating)}
        >
          Rating {openRating ? <IoChevronUp /> : <IoChevronDown />}
        </button>

        {openRating && (
          <div className="mt-3 space-y-2">
            {ratings.map((stars) => (
              <div key={stars} className="flex gap-1 text-yellow-400 text-xl">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - stars }).map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* separator line */}
        <div className="w-full border-b mt-4"></div>
      </div>


      {/* ------------------ CHAPTERS ------------------ */}
      <div className="mb-6">
        <button
          className="flex justify-between w-full text-lg font-medium"
          onClick={() => setOpenChapters(!openChapters)}
        >
          Number of Chapters {openChapters ? <IoChevronUp /> : <IoChevronDown />}
        </button>

        {openChapters && (
          <div className="mt-3 space-y-3">
            {chapterRanges.map((range) => (
              <label key={range} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-blue-600"
                  checked={selectedChapters.includes(range)}
                  onChange={() =>
                    toggleSelection(selectedChapters, setSelectedChapters, range)
                  }
                />
                <span>{range}</span>
              </label>
            ))}
          </div>
        )}

        {/* separator line */}
        <div className="w-full border-b mt-4"></div>
      </div>


      {/* ------------------ PRICES (NEW) ------------------ */}
      <div className="mb-6">
        <button
          className="flex justify-between w-full text-lg font-medium"
          onClick={() => setOpenPrices(!openPrices)}
        >
          Price {openPrices ? <IoChevronUp /> : <IoChevronDown />}
        </button>

        {openPrices && (
          <div className="mt-3 space-y-3">
            {priceRanges.map((range) => (
              <label key={range} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-blue-600"
                  checked={selectedPrices.includes(range)}
                  onChange={() =>
                    toggleSelection(selectedPrices, setSelectedPrices, range)
                  }
                />
                <span>{range}</span>
              </label>
            ))}
          </div>
        )}

        {/* separator line */}
        <div className="w-full border-b mt-4"></div>
      </div>


      {/* ------------------ CATEGORIES (NEW) ------------------ */}
      <div className="mb-3">
        <button
          className="flex justify-between w-full text-lg font-medium"
          onClick={() => setOpenCategories(!openCategories)}
        >
          Categories {openCategories ? <IoChevronUp /> : <IoChevronDown />}
        </button>

        {openCategories && (
          <div className="mt-3 space-y-3">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-blue-600"
                  checked={selectedCategories.includes(cat)}
                  onChange={() =>
                    toggleSelection(selectedCategories, setSelectedCategories, cat)
                  }
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
