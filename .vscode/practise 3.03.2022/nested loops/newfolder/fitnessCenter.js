// ("Back", "Chest", 'Legs", "Abs") и броят клиенти, закупили продукт ("Protein shake", "Protein bar"). 


function fitness(input){

let countVisitors = Number(input[0]);
let index = 1;
let backCounter = 0;
let chestCounter = 0;
let legsCounter = 0;
let absCounter = 0;
let shakeCounter = 0;
let proteinBarCounter = 0;
let trainingPeople = 0;
for(let i = 0; i < countVisitors; i++){
 let activity = input[index];
index++; 

if(activity === "Back"){
    backCounter++;
    trainingPeople++;
}
else if(activity === "Chest"){
    chestCounter++;
    trainingPeople++;
}
else if(activity === "Legs"){
    legsCounter++;
    trainingPeople++;
}
else if(activity === "Abs"){
    absCounter++;
    trainingPeople++;
}
else if(activity === "Protein shake"){
    shakeCounter++;
}
else if(activity === "Protein bar"){
    proteinBarCounter++;
}

}
let percentageTraining = (trainingPeople / countVisitors) * 100;
let percentageProtein = ((shakeCounter + proteinBarCounter) / countVisitors) * 100;

console.log(`${backCounter} - back`);
console.log(`${chestCounter} - chest`);
console.log(`${legsCounter} - legs`);
console.log(`${absCounter} - abs`);
console.log(`${shakeCounter} - protein shake`);
console.log(`${proteinBarCounter} - protein bar`);
console.log(`${percentageTraining.toFixed(2)}% - work out`);
console.log(`${percentageProtein.toFixed(2)}% - protein`);


}
fitness(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])
