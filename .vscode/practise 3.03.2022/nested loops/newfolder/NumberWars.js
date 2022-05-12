function cards(input){
    let player1Name = input[0];
    let player2Name = input[1];
     
    let index = 2;
    let command = input[index];
    let player1Pts = 0;
    let player2Pts = 0;
    let numbwars = true;
     
    while(command !== "End of game"){
        let score1 = Number(input[index]);
        index++;
        let score2 = Number(input[index]);
        index++
     
    if(score1 > score2){
    player1Pts += score1 - score2;
    }
    else if(score1 < score2){
    player2Pts += score2 - score1;
    }else{
       console.log(`Number wars!`);
       score1 = Number(input[index]);
       index++;
       score2 = Number(input[index]);
     
     
       if(score1 > score2){
           numbwars = false;
           console.log(`${player1Name} is winner with ${player1Pts} points`);
           break;
       }
       else{
           numbwars = false;
           console.log(`${player2Name} is winner with ${player2Pts} points"`);
           break;
       }
        }
        command = input[index];
        
    }
     
     
     
    if (command === "End of game") {
        console.log(`${player1Name} has ${player1Pts} points`);
        console.log(`${player2Name} has ${player2Pts} points`);
        }
    }
    cards(["Desi",
    "Niki",
    "7",
    "5",
    "3",
    "4",
    "3",
    "3",
    "5",
    "3"])