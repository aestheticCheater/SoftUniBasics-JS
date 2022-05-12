function maidenParty(input){
let maidenParty = Number(input[0]);
let countLoveLetter = Number(input[1]);
let countRose = Number(input[2]);
let countKeyHolder = Number(input[3]);
let countStatues = Number(input[4]);
let countLuckySurprise = Number(input[5]);



let loveLetter = 0.60;
let rose = 7.20;
let keyholder = 3.60;
let statue = 18.20;
let luckySurprice = 22;

let totalCount = countLoveLetter + countRose + countKeyHolder + countLuckySurprise + countStatues;

let totalPrice = (countLoveLetter * loveLetter + countRose * rose + countKeyHolder * keyholder + countLuckySurprise * luckySurprice + countStatues * statue);
if(totalCount >= 25){
    totalPrice *= 0.65;
}
totalPrice *= 0.90;

if(totalPrice >= maidenParty){
    console.log(`Yes! ${(totalPrice - maidenParty).toFixed(2)} lv left.`);
}
else{
    console.log(`Not enough money! ${(maidenParty - totalPrice).toFixed(2)} lv needed.`);
}
}
maidenParty(["40.8",
"20",
"25",
"30",
"50",
"10"])

