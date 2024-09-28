export const insertionSort = async (bars, setBars, sleep, speedOfSort, setIsSorting) => {
    let arr = bars.slice(); // Copy array
    let n = arr.length;
    
    setIsSorting(true);
  
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j].height > key.height) {
        arr[j + 1] = arr[j];
        j = j - 1;
  
        setBars([...arr]);
        await sleep(100 - 10 * speedOfSort); // Delay for visualization
      }
      arr[j + 1] = key;
      setBars([...arr]);
    }
    
    setIsSorting(false);
  };
  