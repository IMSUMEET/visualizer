import React, { useState } from "react";
import { bubbleSort } from "../Sorting/bubbleSort";
import { insertionSort } from "../Sorting/insertionSort";
import { selectionSort } from "../Sorting/selectionSort";

const Navbar = ({ numberOfBars, setNumberOfBars, bars, setBars }) => {
  const [currentPage, setCurrentPage] = useState("sort");
  const [speedOfSort, setSpeedOfSort] = useState(5);
  const [isSorting, setIsSorting] = useState(false);

  const algorithms = [
    { name: "Bubble Sort", func: bubbleSort },
    { name: "Insertion Sort", func: insertionSort },
    { name: "Selection Sort", func: selectionSort },
  ];
  const [currentAlgorithm, setCurrentAlgorithm] = useState(0);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const startSorting = () => {
    if (!isSorting) {
      algorithms[currentAlgorithm].func(
        bars,
        setBars,
        sleep,
        speedOfSort,
        setIsSorting
      );
    }
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
        <div
          className={`text-primary_dark flex gap-4 items-center px-8 ${
            isSorting ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <label>Range</label>
          <input
            type="range"
            onChange={(e) => setNumberOfBars(e.target.value)}
            value={numberOfBars}
            min={5}
            max={50}
          />
          <label>{numberOfBars}</label>
        </div>
        <div
          className={`text-primary_dark flex gap-4 items-center px-8 ${
            isSorting ? "pointer-events-none opacity-50" : ""
          }`}
        >
          <label>Speed of Sorting</label>
          <input
            type="range"
            value={speedOfSort}
            min={1}
            max={10}
            onChange={(e) => setSpeedOfSort(e.target.value)}
          />
          <label>{speedOfSort}</label>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 text-primary_dark">
        <p>Select Algorithm</p>
        <select
          value={currentAlgorithm}
          onChange={(e) => {
            setCurrentAlgorithm(e.target.value);
            setNumberOfBars(numberOfBars);
          }}
          className={`rounded-lg px-3 py-2 bg-secondary_dark border outline-none ${
            isSorting ? "pointer-events-none opacity-50" : ""
          }`}
        >
          {algorithms.map((algorithm, index) => (
            <option key={index} value={index}>
              {algorithm.name}
            </option>
          ))}
        </select>
      </div>
      <button
        className={`text-primary border border-primary_dark w-[8rem] px-6 py-2 rounded-lg`}
        onClick={startSorting}
        disabled={isSorting}
      >
        {currentPage.toUpperCase()}
      </button>
    </div>
  );
};

export default Navbar;
