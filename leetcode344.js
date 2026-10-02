let s = ["h","e","l","l","o"];

function reverseString (s){
let left=0;
let right=s.length-1;

// while(left<right){
//     [s[left],s[right]]=[s[right],s[left]];
//     left++;
//     right--;
// }
// return s;
// }

while(left<right){
    let temp=s[left];
    s[left]=s[right];
    s[right]=temp;
    left++;
    right--;
}
return s;
}

let result=reverseString(s);
console.log(result)
