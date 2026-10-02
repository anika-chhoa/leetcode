let numbers = [2,7,11,15];
let target = 9;

function twoSum(numbers, target){
    let num1=0;
    let num2=numbers.length-1;
    while(num1<num2){
        if(numbers[num1]+numbers[num2]<target){
            num1++;
        }else if(numbers[num1]+numbers[num2]>target){
            num2--;
        }else{
            return [num1+1,num2+1]
        }
    }
}

let result=twoSum(numbers,target);
console.log(result);