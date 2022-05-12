function shopping(input){
    let budget = Number(input[0]);
    let N = Number(input[1]);
    let M = Number(input[2]);
    let P = Number(input[3]);

   let videoPrice = N * 250;
   let processorPrice = 0.35 * videoPrice;
   let ramPrice = 0.10 * videoPrice;
   let totalPurchace = videoPrice + (M * processorPrice) + (P * ramPrice);
   let discount = 0.15 * totalPurchace;
   
    if(N > M){
        
        totalPurchace = totalPurchace - discount;
    }
    let diff = budget - totalPurchace;
    if(budget >= totalPurchace){
        
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    }
    else if(totalPurchace > budget){
        console.log(`Not enough money! You need ${Math.abs(diff.toFixed(2))} leva more!`)
    }
    


}
shopping(["920.45",
"3",
"1",
"1"])

