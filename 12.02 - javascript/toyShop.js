function dreams(input) {
    let travelPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
  
    let toyCount = puzzleCount + talkingDolls + teddyBears + minions + trucks;
    let toyPrice = puzzleCount * 2.60 + talkingDolls * 3 + teddyBears * 4.10 + minions * 8.20 + trucks * 2;
    
    if (toyCount >= 50) {
        
        toyPrice = toyPrice * 0.75;
    }
toyPrice = toyPrice * 0.90;

let moneyleft = Math.abs(toyPrice - travelPrice);

if (travelPrice <= toyPrice) {
console.log(`Yes! ${moneyleft.toFixed(2)} lv left.`);
}

else{
console.log(`Not enough money! ${moneyleft.toFixed(2)} lv needed.`);

}

}

dreams(["40.8","20","25","30","50","10"])