// let s="anagram";
// let t="nagarav";
// var isAnagram = function(s, t) {
//     const str1=s.split("").sort().join("").toLowerCase();
//     const str2=t.split("").sort().join("").toLowerCase();
//     if(str1===str2){
//         return true;
//     }else{
//         return false;
//     }
// };

// console.log(isAnagram("abnc", "nca"));

let s="anagram";
let t="nagaram";
var isAnagram = function(s, t) {
    if(s.length!==t.length){
        return false;
    }
    let charCount={};
    for(let i=0;i<s.length;i++){
        if(charCount[s[i]]){
            charCount[s[i]]+=1;
        }else{
            charCount[s[i]]=1;
        }
    }
    for(let i=0;i<t.length;i++){
        if(!charCount[t[i]]){
            return false;
        }else{
            charCount[t[i]] -= 1;
        }
    }
    return true;
};

console.log(isAnagram(s, t));