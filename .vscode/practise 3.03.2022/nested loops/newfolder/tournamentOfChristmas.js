function christmas(input){
let index = 0;
let tournamentDays = Number(input[index]);
index++;
let money = 0;
let winCounter = 0;
let loseCounter = 0;



for(let i = 0; i < tournamentDays; i++){
    let command = input[index];
    index++;
    let tempMoney = 0;
    let tempWin = 0;
    let tempLose = 0;


    while(command !== "Finish"){
    let sportName = command;
    let result = input[index];
    index++;

    if(result === "win"){
        tempWin++;
        tempMoney += 20;
    }

    if(result === "lose"){
        tempLose++;
    }
    

    command = input[index];
    index++;
    }
    if(tempWin > tempLose){
        tempMoney *= 1.10;
        winCounter++;
     }
     else if(tempLose > tempWin){
         loseCounter++;
     }
     money += tempMoney;
}
if(winCounter > loseCounter){
    money *= 1.20;
    console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
}
else if(loseCounter > winCounter){
    console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
}



}
christmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])


