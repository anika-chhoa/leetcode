let n=6;

function step (n){
    let prev1=1;
    let prev2=0;
    let current=0;
    for(let i=0;i<=n;i++){
        current=prev1+prev2;
        prev1=prev2;
        prev2=current;
    }
    return current;

}

let result= step(n)
console.log(result)