function changeburo(input){
let bitcoin = 1168;

let dollar = 1.76;
let china = 0.15 * dollar;
let euro = 1.95;


let countOfBitcoin = Number(input[0]) * bitcoin;
let countOfChina = Number(input[1]) * china;
let comission = Number(input[2]);
let comissionPercentage = (comission / 100) * (countOfBitcoin + countOfChina);
let sum = countOfBitcoin + countOfChina - comissionPercentage;
let convertMoney = sum / euro;
console.log(convertMoney.toFixed(2));
}

changeburo(["20",
"5678",
"2.4"])
