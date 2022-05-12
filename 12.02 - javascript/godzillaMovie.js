function movie(input) {

    let budget = Number(input[0]);
    let personCount = Number(input[1]);
    let personPrice = Number(input[2]);
    let decorationPrice = 0.10 * budget;
    
 if (personCount > 150) {
     personPrice = 0.90 * personPrice;
 }
 
 let totalPrice = (personCount * personPrice) + decorationPrice;
 let moneyleft = Math.abs(budget - totalPrice);
if(budget < totalPrice){
console.log("Not enough money!");
console.log(`Wingard needs ${moneyleft.toFixed(2)} leva more.`);
}
else if(budget >= totalPrice) {
console.log("Action!");
console.log(`Wingard starts filming with ${moneyleft.toFixed(2)} leva left.`);
}


}
movie(["15437.62",
"186",
"57.99"])



