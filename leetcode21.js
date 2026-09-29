let list1 = [];
let list2 = [0];

function sort (list1,list2){
    let mergedArr=list1.concat(list2);
    let sortedArr=mergedArr.sort((a,b)=>a-b);
    return sortedArr;
}

let result=sort(list1,list2);
console.log(result)