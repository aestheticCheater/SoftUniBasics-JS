function tennis(input){
let priceRacket = Number(input[0]);
let countRacket = Number(input[1]);
let countTrainers = Number(input[2]);
let priceTrainers = priceRacket / 6;

let bothPrice = (priceRacket * countRacket) + (priceTrainers * countTrainers);
let others = bothPrice * 0.20;

let total = bothPrice + others;
let djocovic = total / 8;
let sponsors = total - djocovic;

console.log(`Price to be paid by Djokovic ${Math.floor(djocovic)}`);
console.log(`Price to be paid by sponsors ${Math.ceil(sponsors)}`);
}

tennis(["850", "4", "2"])