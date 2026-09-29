let n=11;
function hammingWeight (n){
let result=n.toString(2).split(0).join("").length;
return result;
}
let result=hammingWeight(n);
console.log(result)