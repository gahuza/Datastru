function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index if found
      }
    }
    return -1; // Not found
  }
  
  // Usage
  const items = [4, 2, 7, 1, 9, 3];
  console.log("Found at index:", linearSearch(items, 9)); // Output: 4
  