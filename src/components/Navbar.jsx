import React, { useState } from "react";

const Navbar = ({
  numberOfBars,
  setNumberOfBars,
  bars,
  setBars,
  isSorting,
  setIsSorting,
}) => {
  const [currentPage, setCurrentPage] = useState("sort");
  const [speedOfSort, setSpeedOfSort] = useState(5);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const bubbleSort = async (bars) => {
    let arr = bars.slice(); // Create a copy of the array
    let n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
      swapped = false;

      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j].height > arr[j + 1].height) {
          // Swap both the 'height' and 'color'
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;

          // Update the bars state after each swap to reflect changes visually
          setBars([...arr]);
          await sleep(100 - 10 * speedOfSort);
        }
      }

      if (!swapped) {
        break;
      }
    }

    // Final update to ensure the last sorted state is shown
    setBars([...arr]);
    setIsSorting(false);
  };

  return (
    <div className="sticky top-0 left-0 bg-secondary_dark flex px-10 py-3 justify-between items-center">
      <div className="flex gap-4">
        <a
          className={`${
            currentPage === "sort"
              ? "text-[#9BEC00] underline underline-offset-8"
              : "text-primary_dark"
          } cursor-pointer px-4`}
          onClick={() => setCurrentPage("sort")}
        >
          Sorting
        </a>
        <a
          className={`${
            currentPage === "traverse"
              ? "text-[#9BEC00] underline underline-offset-8"
              : "text-primary_dark"
          } cursor-pointer px-4`}
          onClick={() => setCurrentPage("traverse")}
        >
          Graph Traversal
        </a>
      </div>
      <div
        className={`flex gap-4 ${currentPage === "traverse" ? "hidden" : ""}`}
      >
        <div className="text-primary_dark flex gap-4 items-center px-8">
          <label>Range</label>
          <input
            type="range"
            onChange={(e) => setNumberOfBars(e.target.value)}
            value={numberOfBars}
            min={5}
            max={50}
            className={`${isSorting ? "pointer-events-none opacity-50" : ""}`}
          />
          <label>{numberOfBars}</label>
        </div>
        <div className="text-primary_dark flex gap-4 items-center px-8">
          <label>Speed of Sorting</label>
          <input
            type="range"
            value={speedOfSort}
            min={1}
            max={10}
            onChange={(e) => setSpeedOfSort(e.target.value)}
            className={`${isSorting ? "pointer-events-none opacity-50" : ""}`}
          />
          <label>{speedOfSort}</label>
        </div>
      </div>

      <button
        className="text-primary border border-primary_dark w-[8rem] px-6 py-2 rounded-lg"
        onClick={() => {
          bubbleSort(bars);
          setIsSorting(true);
        }}
      >
        {currentPage.toUpperCase()}
      </button>
    </div>
  );
};

export default Navbar;
