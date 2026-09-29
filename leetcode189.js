// let nums = [1, 2, 3, 4, 5, 6, 7];
// let k = 3;

// function rotate(nums, k) {
//   k = k % nums.length;
//   for (let i = 0; i < nums.length - k; i++) {
//     let num = nums.shift();
//     nums[nums.length] = num;
//   }
//   return nums;
// }
// const result = rotate(nums, k);
// console.log(result);
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

function rotate(nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
}
const result = rotate(nums, k);
console.log(result);
