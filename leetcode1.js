let nums = [2, 7, 11, 15];
let target=9;

function twoSum (nums, target){
    let ind={};
    for(let num=0;num<nums.length; num++){
        let complement=target-nums[num]
        if(ind[complement]!==undefined){
            return [ind[complement], num]
        }else{
            ind[nums[num]]=num;
        }
    }
}
let result=twoSum(nums,target);
console.log(result);
