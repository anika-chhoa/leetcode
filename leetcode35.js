let nums = [2,3,5,6];
let target = 1;

function searchInsert(nums,target){
    if(nums[0]>target){
        return 0;
    }
    let lastIndex=nums.length-1;
    if(nums[lastIndex]<target){
        return lastIndex+1;
    }
    for(let i=0; i<nums.length;i++){
        if(nums[i]===target){
            return i;
        }
        if(nums[i]<target &&nums[i+1]>target){
            return i+1;
        }
    }
}

let result=searchInsert(nums,target);
console.log(result);