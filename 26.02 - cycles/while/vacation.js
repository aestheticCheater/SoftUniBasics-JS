function vacations(input) {
    let vacationPrice = Number(input[0]); // input 2000
    let budget = Number(input[1]); // input 1000
    let index = 2; // command spend
    let daysSpend = 0;
    let dayCounter = 0;


    while (budget < vacationPrice) {
        let action = input[index]; // string = spend || save
        index++;
        let transaction = Number(input[index]);
        index++;
        dayCounter++;

        switch (action) {
            case "spend":
                budget -= transaction;
                if (budget < 0) {
                    money = 0;
                }
                daysSpend++;
                break;


            case "save":
                budget += transaction;
                daysSpend = 0;
                break;
        }
        if (daysSpend >= 5) {
            console.log(`You can't save the money.`);
            console.log(`${dayCounter}`);
            break;
        }
        index++;
        
    }
    if (budget >= vacationPrice) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }

}
vacations(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])




