let nums=[3,2,2,3];
let val=3;

function removeElement (nums,val){
    let newArr=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            newArr.push(nums[i])
        }
    }
    let k=newArr.length;
    while(newArr.length<nums.length){
        newArr.push("")
    }
    for(let i=0; i<nums.length;i++){
        nums[i]=newArr[i];
    }
    return k;
}

let k=removeElement(nums,val);
console.log(k, nums)


function removeElement(nums, val) {
    let newArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            newArr.push(nums[i]);
        }
    }

    let k = newArr.length;

    for (let i = 0; i < k; i++) {
        nums[i] = newArr[i];
    }

    return k;
}

let k=removeElement(nums,val);
console.log(k, nums)