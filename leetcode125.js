let s = "race a car";

function ispalindrome (s){
    let str=s.trim().toLowerCase().split(" ").join("")
    let arr=[];
    for(let i of str){
        if(i>="a" && i<="z" || i>="0" && i<="9"){
            arr.push(i);
        }
    }
    let newStr=arr.join("");
    for(let i=0; i<newStr.length;i++){
        if(newStr[i]!==newStr[newStr.length-1-i]){
            return false;
        }
    }
    return true;
}
let result= ispalindrome(s)
console.log(result)
