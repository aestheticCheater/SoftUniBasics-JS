function hairSalon(input){
let goal = Number(input[0]);
let index = 1;
let command = input[index];
let incomes = 0;
while(command !== "closed"){
command = input[index];
index++;
let type = input[index];
index++;

if(command === "closed"){
    break;
}

if(command === "haircut"){
    switch(type){
case "mens":
    incomes += 15;
    break;
    case "ladies":
        incomes += 20;
        break;
        case "kids":
            incomes += 10;
            break;
    }
}
else if(command === "color"){
    switch(type){
        case "touch up":
            incomes += 20;
            break;
            case "full color":
                incomes += 30;
                break;
    }

}


command = input[index];
}

if(incomes < goal){
    let diff = goal - incomes;
    console.log(`Target not reached! You need ${diff}lv. more.`);
    console.log(`Earned money: ${incomes}lv.`);
}
else if(incomes >= goal){
    console.log(`You have reached your target for the day!`);
    console.log(`Earned money: ${incomes}lv.`);
}

}

hairSalon(["300", "haircut", "ladies", "haircut", "kids", "color", "touch up", "closed"])