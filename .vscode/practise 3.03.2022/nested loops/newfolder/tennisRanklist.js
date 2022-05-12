function tennis(input){
let countTournaments = Number(input[0]);
let startScore = Number(input[1]);
let currScore = 0;
let avg = 0;
let countW = 0;
let percentageWinGames = 0;
let finalPoints = 0;
let index = 2;

for(i = 0; i < countTournaments; i++){
let stage = input[index];
index++;
switch(stage){
    case "W":
        currScore += 2000;
        countW++;
        break;

        case "F":
            currScore += 1200;
            break;

            case "SF":
                currScore += 720;
                break;
}

stage = input[index];
}

avg = currScore / countTournaments; 
percentageWinGames = (countW / countTournaments) * 100;
finalPoints = currScore + startScore;

console.log(`Final points: ${finalPoints}`);
console.log(`Average points: ${Math.floor(avg)}`);
console.log(`${percentageWinGames.toFixed(2)}%`);

}
tennis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
