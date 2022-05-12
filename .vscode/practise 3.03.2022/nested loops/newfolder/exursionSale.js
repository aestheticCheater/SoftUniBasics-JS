function exursion(input) {
    let index = 0;
    let seaTripAmount = Number(input[index++]);
    let mountainTripAmount = Number(input[index++]);
    let profit = 0;
    let sea = 680;
    let mountain = 499;
    while (input.length > 0) {
    
    let destination = input[index++];
    if (destination === "Stop" || (seaTripAmount === 0 && mountainTripAmount === 0)) {
    break; 
    }
    
    if (destination === "sea" && seaTripAmount > 0) {
    profit += sea;
    seaTripAmount--;
    } else if (destination === "mountain" && mountainTripAmount > 0) {
    profit += mountain;
    mountainTripAmount--;
    }
    }
    if (seaTripAmount === 0 && mountainTripAmount === 0) {
    console.log("Good job! Everything is sold.");
    }
    console.log(`Profit: ${profit} leva.`);
    }
    exursion([
    
    "2", "2", "sea", "mountain", "sea", "sea", "mountain"
    
    ]);