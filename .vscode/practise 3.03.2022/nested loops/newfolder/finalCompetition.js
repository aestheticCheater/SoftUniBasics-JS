function finalCompetition(input){
let countDancer = Number(input[0]);
let countPoints = Number(input[1]);
let season = input[2];
let place = input[3];
let price = 0;


switch(place){
    case "Bulgaria":
        if(season === "summer"){
     price = countPoints * countDancer;
     price *= 0.95; 
        }
        else{
            price = countDancer * countPoints;
            price *= 0.92;
        }
        break;
        case "Abroad":
            if(season === "summer"){
                price = countDancer * countPoints;
                price *= 1.50;
                price *= 0.90;
            }
            else{
                price = countDancer * countPoints;
                price *= 1.35;
            }
            break;
}
let charity = price * 0.75;
let moneyLeft = price - charity;

let moneyPerDancer = moneyLeft / countDancer;
console.log(`Charity - ${(charity).toFixed(2)}`);
console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
 

}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])


