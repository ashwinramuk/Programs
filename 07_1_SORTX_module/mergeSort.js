function mergeArrays(array1, array2) {
    let sortedArray = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
      if (array1[i] < array2[j]) {
        sortedArray.push(array1[i]);
        i++;
      } else {
        sortedArray.push(array2[j]);
        j++;
      }
    }
  
    //either the first arry is non empty
    while (i < array1.length) {
      sortedArray.push(array1[i]);
      i++;
    }
  
    //either the second array is non empty
    while (j < array2.length) {
      sortedArray.push(array2[j]);
      j++;
    }
  
    return sortedArray;
}
  
function mergeSort(arr) {
    if (arr.length === 1 || arr.length === 0) {
        return arr;
    }
    let start = 0;
    let end = arr.length - 1;
    let mid = parseInt((start + end) / 2);
    let LeftArray = new Array();
    for (let i = start; i <= mid; i++) {
        LeftArray.push(arr[i]);
    }
    let RightArray = new Array();
    for (let i = mid + 1; i <= end; i++) {
        RightArray.push(arr[i]);
    }
    let leftAns = mergeSort(LeftArray);
    let rightAns = mergeSort(RightArray);
    let ans = mergeArrays(leftAns, rightAns);
    return ans;
}
  
let arr = [2, 5, 7, 10, 9,15,13,11,12];
console.log(mergeSort(arr))