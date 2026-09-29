// var containsDuplicate = function(nums) {
//     let unique=[];
//     for(let num of nums){
//         if(unique.includes(num)){
//             return true;
//         }else{
//             unique.push(num);
//         }  
//     }
//     return false;
// };

// let result=containsDuplicate([1,2,3,6])
// console.log(result)

var containsDuplicate = function(nums) {
    let unique = new Set();

    for(let num of nums){

        if(unique.has(num)){
            return true;
        }

        unique.add(num);
    }

    return false;
};

let result=containsDuplicate([1,2,3,1])
console.log(result)