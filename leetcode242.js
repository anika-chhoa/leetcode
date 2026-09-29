let s="anagram";
let t="nagarav";
var isAnagram = function(s, t) {
    const str1=s.split("").sort().join("").toLowerCase();
    const str2=t.split("").sort().join("").toLowerCase();
    if(str1===str2){
        return true;
    }else{
        return false;
    }
};

console.log(isAnagram("abnc", "nca"));