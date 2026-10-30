let nums = [1,1,1,0,0,0,1,1,1,1,0];
let k=2;

function longestOnes(nums,k){
    let maxLength=0;
    let zeroCount=0;
    let left=0;
    for(let right=0; right<nums.length;right++){
        if(nums[right]===0){
            zeroCount++;
        }
        while(zeroCount>k){
            if(nums[left]===0){
                zeroCount--;
            }
            left++;
        }
        maxLength=Math.max(maxLength, (right-left)+1);
    }
    return maxLength;
}

let result=longestOnes(nums,k);
console.log(result);