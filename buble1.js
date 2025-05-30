function bubbleSort(arr){
    let len = arr.length;
    let swapped;

    do{
        swapped = false;
    for(i=0;i<len-1;i++){
        if(arr[i]>arr[i+1]){
            [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
            swapped = true;
        }
    }}
    while(swapped);
    return arr;

}
let numbers = [3,2,1,4,7,9,8,6];
console.log(bubbleSort(numbers));