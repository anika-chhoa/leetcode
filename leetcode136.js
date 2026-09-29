let nums = [2,2,1];

function singleNumber(nums){
    let unique=new Set();
    for(let i=0; i<nums.length;i++){
        if(unique.has(nums[i])){
            unique.delete(nums[i])
        }else{
            unique.add(nums[i])
        }
    }
    return Array.from(unique)[0];
}
let result=singleNumber(nums);
console.log(result)

