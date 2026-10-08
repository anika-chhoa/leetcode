let nums = [1,12,-5,-6,50,3];
let k=4;

function findMaxAverage(nums,k){
    let currentSum=0;
    let maxSum=0;
    for(let i=0;i<k;i++){
        currentSum+=nums[i];
    }
    maxSum=currentSum;
    for(let i=k;i<nums.length;i++){
        currentSum=currentSum-nums[i-k]+nums[i];
        if(currentSum>maxSum){
            maxSum=currentSum;
        }
    }
    return maxSum/k;
}

let result=findMaxAverage(nums,k);
console.log(result)