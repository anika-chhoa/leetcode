
var removeDuplicates = function(nums) {
    const k=[];
    for(let i of nums){
    if(!k.includes(i)){
        k.push(i)
    }
}
for (let i = 0; i < unique.length; i++) {
    nums[i] = k[i];
}
return k.length
};