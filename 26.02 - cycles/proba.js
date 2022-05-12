function oscars(input){
    index = 0;
    let actorName = input[index];
    index++;
    let academyPts = Number(input[index]);
    index++;
    let juryCount = Number(input[index]);
    index++;
   let isHavingPts = true;


    for(let i = 0; i < juryCount; i++){
    let juryName = input[index];
    index++;
    let juryPts = Number(input[index]);
    index++;

    academyPts += juryName.length * juryPts / 2;

    if(academyPts > 1250.5){
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPts.toFixed(1)}!`);
        isHavingPts = false;
        break;
    }

    }
    if(isHavingPts){
        let diff = Math.abs(academyPts - 1250.5);
        console.log(`Sorry, ${actorName} you need ${diff} more!`)
    }
}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])


