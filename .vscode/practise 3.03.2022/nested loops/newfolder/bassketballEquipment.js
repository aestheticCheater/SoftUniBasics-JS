function basket(input){
let yearPrice = Number(input[0]);

let trainers = 0.60 * yearPrice;
let equipment = 0.80 * trainers;
let ball = 0.25 * equipment;
let accessories = 0.20 * ball;

let razhodi = yearPrice + trainers + equipment + ball + accessories;

console.log(razhodi.toFixed(2));

}
basket(["320"])