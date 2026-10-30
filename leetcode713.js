let nums = [10,5,2,6];
let k=100;

function numSubarrayProductLessThanK (nums,k){
    if(k<=1){
        return 0;
    }
    let count=0;
    let currentProduct=1;
    let left=0;
    for(let right=0;right<nums.length;right++){
        currentProduct*=nums[right];

        while(currentProduct>=k){
            currentProduct=currentProduct/nums[left];
            left++;
        }
        count+=(right-left)+1;
    }
    return count;
}

let result=numSubarrayProductLessThanK(nums,k);
console.log(result);