let e = [55,28,33,60,48,25,22,19,11,1] //even-10
let o = [55,28,33,60,32,22,19,11,1] //odd-9
let t = [1,-1] //two-2
let l = [10,9,8,7,6,5,4,3,2,1,1,2,3,4,5,6,7,8,9,10]

let items = l;
console.log(items)
function sort(items,left,right){
    let i = left, j = right;
    let pivot = parseInt((left+right)/2)
    let check = items[pivot]
    while(i<=j){
        if (items[i]<check) {i++;continue;}
        if (items[j]>check) {j--;continue;}
        if(i<=j){
            let temp = items[i];
            items[i] = items[j];
            items[j] = temp;
            i++;j--;
        }
    }return i
}
let left =count=0
let right = items.length-1
function quickSort(items,left,right){
    index = sort(items,left,right)
    count++
    console.log("count,left,right: ",count,left,right)
    if(left<index-1) quickSort(items,left,index-1)
    if(index<right) quickSort(items,index,right)
    return items
}
items = quickSort(items, left, right)
console.log(items, count)