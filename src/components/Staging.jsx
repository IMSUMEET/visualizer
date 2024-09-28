import React, { useEffect } from "react";

const Staging = ({ numberOfBars, bars, setBars }) => {
  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    let temp = [];
    for (let index = 0; index < numberOfBars; index++) {
      // Each bar gets a height and a random color
      temp.push({
        height: Math.floor(Math.random() * numberOfBars + 1),
        color: getRandomColor(),
      });
    }
    setBars(temp);
  }, [numberOfBars]);

  return (
    <div className="bg-primary_dark h-[40rem] px-1 py-1 flex-grow flex items-end">
      <div className="w-full h-full border border-black flex justify-center items-end">
        <div className="w-full h-full flex justify-center items-end overflow-auto">
          {bars.map((bar, index) => (
            <div
              key={index}
              className="px-1"
              style={{ height: `${bar.height}rem`, backgroundColor: bar.color }}
            >
              {bar.height}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staging;
