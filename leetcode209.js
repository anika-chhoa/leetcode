let nums = [2,3,1,2,4,3];
let target = 7;

function minSubArrayLen(target, nums) {
  let currentSum = 0;
  let minLength = Infinity;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];
    while (currentSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currentSum -= nums[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

let result=minSubArrayLen(target, nums);
console.log(result)