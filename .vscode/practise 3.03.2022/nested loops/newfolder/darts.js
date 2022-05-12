function darts(input){
let playerName = input[0];
let index = 1;
let command = input[index];
let totalPoints = 301;
let successfulShots = 0;
let unsuccessfulShots = 0;


while(command !== "Retire"){
    
    command = input[index];
    index++;
    let currentPoints = Number(input[index]);
 
    
 if(command === "Triple" && totalPoints - currentPoints > 0){
     if(currentPoints <= totalPoints){
currentPoints *= 3;
if(currentPoints > totalPoints){
    unsuccessfulShots++;
    continue;
}
totalPoints -= currentPoints;
successfulShots++
     }
 }
 else if(command === "Double" && totalPoints - currentPoints > 0){
    if(currentPoints <= totalPoints){
    currentPoints *= 2;
     if(currentPoints > totalPoints){
         unsuccessfulShots++;
         continue;
     }
     totalPoints -= currentPoints;
     
     successfulShots++;
    }
 }
 else if(command === "Single" && totalPoints - currentPoints >= 0){
    if(currentPoints <= totalPoints){ 
    currentPoints *= 1;
     if(currentPoints > totalPoints){
         unsuccessfulShots++;
         continue;
     }
     totalPoints -= currentPoints;
     successfulShots++;
    }
     
 }
 if(totalPoints === 0){
 console.log(`${playerName} won the leg with ${successfulShots} shots.`);
break;}


 command = input[index];
}
if(command === "Retire") {
    console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`);
   
}

}


darts(["Michael van Gerwen",
"Triple",
"20",
"Triple",
"19",
"Double",
"10",
"Single",
"3",
"Single",
"1",
"Triple",
"20",
"Triple",
"20",
"Double",
"20"])


