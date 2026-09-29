let haystack = "leetcode";
let needle = "leeto";

function firstStr (haystack,needle){
    let index=haystack.indexOf(needle);
    return index;
}
let result=firstStr(haystack,needle);
console.log(result);