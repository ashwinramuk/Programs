passengers = [2,3]
buses = [3,2]
capacity = 2;

function swap(items, leftIndex, rightIndex){
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    let pivot   = items[parseInt((right + left)/2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {i++;}
        while (items[j] > pivot) {j--;}
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
buses = quickSort(buses, 0, buses.length - 1);
passengers = quickSort(passengers, 0, passengers.length - 1);
//console.log(buses, passengers); 
// let count = 1;
// while(count){
//     count = 0;
//     for(let i=1;i<buses.length;i++){
//         if (buses[i-1]>buses[i]){
//             temp = buses[i-1];
//             buses[i-1]=buses[i];
//             buses[i]=temp
//             count++;
//         }
//     }
//     for(let i=1;i<passengers.length;i++){
//         if (passengers[i-1]>passengers[i]){
//             temp = passengers[i-1];
//             passengers[i-1]=passengers[i];
//             passengers[i]=temp
//             count++;
//         }
//     }
// }
// console.log('passengers:',...passengers, '\n','buses:',...buses)
let j=i=latest=0, a = capacity, flag = true;
while(i<=passengers.length&&flag){
    if(passengers[i]<=buses[j]&&capacity){capacity--; i++;}
    else{
        if(j<buses.length-1){j++; capacity= a;}
        else{
            if(capacity!==0 && passengers[i-1]!==buses[j]) {latest = buses[j];break;}
            else{
                while(flag){
                    if(passengers[i-1]-passengers[i-2]!==1) {latest = passengers[i-1]-1;flag=false;}
                    else i--
                }
            }
        }
    }
}console.log(latest)
