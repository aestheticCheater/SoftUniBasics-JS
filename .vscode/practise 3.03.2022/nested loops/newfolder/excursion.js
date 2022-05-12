function excursion(input) {
let budget = Number(input[0]);
let price = Number(input[1]);
let transport = Number(input[2]);

let fireworks = 0.55 * transport;
let spa = 1.15 * price;
let finalPrice = price + transport + fireworks + spa;

if(budget - finalPrice >= 0){
    console.log(`Happy New Year. Money left: ${(budget - finalPrice).toFixed(2)} leva.`);

}
else{
    console.log(`Not enough money! They need ${Math.abs((budget - finalPrice)).toFixed(2)} leva more!`);
}

}
excursion(["450",
    "200",
    "20"
])