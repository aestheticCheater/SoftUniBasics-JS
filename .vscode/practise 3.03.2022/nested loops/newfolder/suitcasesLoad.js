function luggage(input) {
    let capacity = Number(input[0]);
    let index = 1;
    let baggageCounter = 0;

    let command = input[index];
    let baggage = Number(command);
    let spaceLeft = 0;
    while (command !== 'End') {
        baggage = Number(command);
        index++;

        if (index % 3 === 0) {
            baggage *= 1.10;
        }

        if (capacity - baggage < 0) {
            break;
        }

        baggageCounter++;

        capacity -= baggage;

        command = input[index];
    }
spaceLeft = capacity - baggage;
    if (command === 'End') {
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${baggageCounter} suitcases loaded.`);
    } else if(baggage > spaceLeft){
        console.log("No more space!");
        console.log(`Statistic: ${baggageCounter} suitcases loaded.`);
    }
}

luggage(["700.5",
"180",
"340.6",
"126",
"220"])


