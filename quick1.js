function quickSort(arr){
    if(arr.length <=0) return arr;
    const pivot = arr[arr.length-1];
    const left = [];
    const right = [];

    for(let i = 0; i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
  return [...quickSort(left),pivot,...quickSort(right)];
}

const numbers = [41,3,2,1,6,97,8,7];
console.log(quickSort(numbers));