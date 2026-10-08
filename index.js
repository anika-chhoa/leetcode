// let arr=[101, 102, 103, 104, 105];
// let newArr=[];
// for(let i=1; i<arr.length;i++){
//     newArr.push(arr[i])
// }

// console.log(newArr)

// Two pointer: 344, 167, 125, 27, 283

let customers = [5, 2, 7, 3, 5, 8, 4];
let k=3;

function greatestSum (customers,k){
    let currentSum=0;
    let maxSum=0;
for(let i=0; i<k;i++){
    currentSum+=customers[i];
    maxSum=currentSum;
}
for(let i=k;i<customers.length;i++){
    currentSum=currentSum-customers[i-k]+customers[i];
    if(currentSum>maxSum){
        maxSum=currentSum;
    }
}
return maxSum;
}


let result=greatestSum(customers,k);
console.log(result)

