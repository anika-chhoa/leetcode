let nums = [2,2,1,1,1,2,2];

function majorityElement(nums){
    
// let maxCount = 0;
// let mostFrequent;

// for (let i = 0; i < nums.length; i++) {
//     let count = 0;

//     for (let j = 0; j < nums.length; j++) {
//         if (nums[i] === nums[j]) {
//             count++;
//         }
//     }

//     if (count > maxCount) {
//         maxCount = count;
//         mostFrequent = nums[i];
//     }
// }
// return mostFrequent;
let count = {};
let max = 0;
let result;

for (let num of nums) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > max) {
        max = count[num];
        result = num;
    }
}
return result;
}
let result=majorityElement(nums);
console.log(result)