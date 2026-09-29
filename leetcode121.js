let prices = [7,6,4,3,1];

function profit(prices){
    let lowest=prices[0];
    let profit=0;
    for(let i=0; i<prices.length;i++){
        if(prices[i]<lowest){
           lowest=prices[i];
        }else if(prices[i]-lowest>profit){
            profit=prices[i]-lowest;
        }
    }
    return profit;
}
let result=profit(prices);
console.log(result);