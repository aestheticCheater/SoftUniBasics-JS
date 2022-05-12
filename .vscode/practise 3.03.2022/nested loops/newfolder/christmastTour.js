function christmas(input){
let index = 0;
let day = Number(input[index]);
index++;
let money = 0;
let winCounter = 0;
let loseCounter = 0;


for(let i = 0; i < day; i++){
    let command = input[index];
    index++;
    let tempMoney = 0;
    let tempWinCount = 0;
    let tempLoseCount = 0;

    while(command !== "Finish"){
      let sportName = command;
      let result = input[index];
      index++;
     
      if(result === "win"){
          tempMoney += 20;
          tempWinCount++;
      }
      else if(result === "lose"){
          tempLoseCount++;
      }
      command = input[index];
      index++;
     
    }
    if(tempWinCount > tempLoseCount){
        tempMoney *= 1.10;
        winCounter++;
    }
    else {
        loseCounter++;
    }
    money += tempMoney;

  }
if(winCounter > loseCounter){
    money *= 1.20;
console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
}
else{
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
