function quickSort(arr) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Usage
  const numbers2 = [10, 7, 8, 9, 1, 5];
  console.log("Quick Sorted:", quickSort(numbers2));
  