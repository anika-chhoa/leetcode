// let x=1001
// function palindrome (x){
//     let num2=[];
//     let number=x;
//     while(number>0){
//         if(number%10 === 0){
//         return false;
//     }else{
//         num2.push(number%10);
//         number=Math.floor(number/10);
//     }
//     }
//     const reverseNumber=Math.floor(num2.join(""));
//     return x === reverseNumber;
// }

// let result=palindrome(x);

// console.log(result);


let x=1001
function palindrome (x){
    let num2=[];
    let number=x;
    while(number>0){ 
        num2.push(number%10);
        number=Math.floor(number/10);
    }
    const reverseNumber=Math.floor(num2.join(""));
    return x === reverseNumber;
}

let result=palindrome(x);

console.log(result);