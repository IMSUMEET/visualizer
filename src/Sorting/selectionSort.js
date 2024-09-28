export const selectionSort = async (bars, setBars, sleep, speedOfSort, setIsSorting) => {
    let arr = bars.slice(); // Copy array
    let n = arr.length;
    
    setIsSorting(true);
  
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < n; j++) {
        if (arr[j].height < arr[minIndex].height) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
        setBars([...arr]);
        await sleep(100 - 10 * speedOfSort); // Delay for visualization
      }
    }
    
    setBars([...arr]);
    setIsSorting(false);
  };
  