let arr = [11,13,17,23,29,31,7,5,2,3];
let k=3;
let threshold = 5;

function numOfSubarrays(arr,k,threshold){
    let currentSum=0;
    let output=0;
    for(let i=0;i<k;i++){
        currentSum+=arr[i];
    }
    let avg=currentSum/k;
        if(avg>=threshold){
            output++;
        }
    for(let i=k;i<arr.length;i++){
        currentSum=currentSum-arr[i-k]+arr[i];
        let avg=currentSum/k;
        if(avg>=threshold){
            output++;
        }
    }
    return output;
}

let result=numOfSubarrays(arr,k,threshold);
console.log(result)