function tennis(input) {
    index = 0;
    let tourCount = Number(input[index]);
    index++;
    let startPts = Number(input[index]);
    index++;
    let tempPts = 0;
    let winCount = 0;


    for (let i = 0; i < tourCount; i++) {
        let stage = input[index];
        index++;
        switch (stage) {
            case "W":
                tempPts += 2000;
                winCount++;
                break;

            case "F":
                tempPts += 1200;

                break;
            case "SF":
                tempPts += 720;

                break;
        }

    }
    let finalPts = tempPts + startPts;
    let avgPts = Math.floor(tempPts / tourCount);
    let winGame = winCount / tourCount * 100;

    console.log(`Final points: ${finalPts}`)
    console.log(`Average points: ${avgPts}`)
    console.log(`${winGame.toFixed(2)}%`)
}
tennis(["4",
    "750",
    "SF",
    "W",
    "SF",
    "W"])

