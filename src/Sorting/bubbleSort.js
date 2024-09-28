export const bubbleSort = async (bars, setBars, sleep, speedOfSort, setIsSorting) => {
    let arr = bars.slice(); // Copy array
    let n = arr.length;
    let swapped;
    
    setIsSorting(true);
  
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j].height > arr[j + 1].height) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
          swapped = true;
  
          setBars([...arr]);
          await sleep(100 - 10 * speedOfSort); // Delay for visualization
        }
      }
      if (!swapped) break; // If no swaps, array is sorted
    }
    setBars([...arr]);
    setIsSorting(false);
  };
  