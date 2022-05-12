function bracelet(input){

    let budget = Number(input[0]) * 5;
    let moneyPerDaySale = Number(input[1]) * 5;
    let moneySpent = Number(input[2]);
    let priceGift = Number(input[3]);

    let totalMoney = (budget + moneyPerDaySale) - moneySpent;
    if(totalMoney >= priceGift){
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    }
    else{
        console.log(`Insufficient money: ${(priceGift - totalMoney).toFixed(2)} BGN.`);
    }

}
bracelet(["15.20",
"200.00",
"7.30",
"1500.12"])
