function bags(input){
let priceWeightover20 = Number(input[0]);
let weightBags = Number(input[1]);
let daysUntilTravel = Number(input[2]);
let countBags = Number(input[3]);
let price = 0;


if(weightBags <= 10){
price = 0.20 * priceWeightover20;
}
else if (weightBags >= 10 && weightBags <= 20){
    price = 0.50 * priceWeightover20;
}
else if(weightBags > 20){
    price = priceWeightover20;
}

if(daysUntilTravel > 30){
    price *= 1.10;
}
else if(daysUntilTravel >= 7 && daysUntilTravel <= 30){
    price *= 1.15;
}
else if(daysUntilTravel < 7){
    price *= 1.40;
}


let finalPrice = price * countBags;
console.log(`The total price of bags is: ${finalPrice.toFixed(2)} lv.`);

}

bags(["63.80",
"23",
"3",
"1"])
