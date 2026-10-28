let s="abcabcbb";
function lengthOfLongestSubstring(s){
    let longestLength=0;
    let unique=new Set();
    let left=0;
    for(let right=0;right<s.length;right++){
        while(unique.has(s[right])){
            unique.delete(s[left]);
            left++;
        }
        unique.add(s[right]);
        longestLength=Math.max(longestLength, (right-left)+1);
    }
    return longestLength;
}
let result=lengthOfLongestSubstring(s);
console.log(result)