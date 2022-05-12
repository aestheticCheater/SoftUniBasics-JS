function vacation(input){
let moneyNeeded = Number(input[0]);
let budget = Number(input[1]);
let index = 2;
let action = input[index];
let daysCounterSpent = 0;
let dayCounter = 0;
while(budget < moneyNeeded){
action = input[index];
index++;
let money = Number(input[index]);
index++;
dayCounter++;


if(action === "save"){
    daysCounterSpent = 0;
    budget += money;
    
}
else if(action === "spend"){
    daysCounterSpent++;
    budget -= money;
}
if(budget <= 0){
    budget = 0;
}
if(daysCounterSpent === 5){
    console.log("You can't save the money.");
    console.log(`${dayCounter}`);
    break;

}



}
if(budget >= moneyNeeded){
console.log(`You saved the money for ${dayCounter} days.`);
}}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])



