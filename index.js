// let arr=[101, 102, 103, 104, 105];
// let newArr=[];
// for(let i=1; i<arr.length;i++){
//     newArr.push(arr[i])
// }

// console.log(newArr)

let arr = [1, 2, 3, 4, 5];

let left = 0;
let right = arr.length - 1;

while (left < right) {
    [arr[left],arr[right]]=[arr[right],arr[left]];
    left++;
    right--;
}
console.log(arr);


for(let i=0; i<arr.length;i++){
    for(let j=arr.length-1;)
}