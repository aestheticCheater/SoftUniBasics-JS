function everest(input){
    let index = 0;
    let command = input[index];
    let daysCounter = 1;
    let climbing = 5364;
    let isClimbed = true;
    while(command !== "END"){
    command = input[index];
    index++;
    if(command === "END"){
        isClimbed = false;
        break;
    }
    
    let meters = Number(input[index]);
   if(command === "Yes"){
    daysCounter++;}
    else if(command === "No"){
        daysCounter = daysCounter;
    }

    if(climbing > 8848){
        isClimbed = true;
        console.log(`Goal reached for ${daysCounter} days!`);
break;
    }
 if(daysCounter > 5){
     isClimbed = false;
    break;
}
climbing += meters;

    command = input[index];
    index++;
    }
if(!isClimbed){
    console.log("Failed!");
    console.log(`${climbing}`);}
}
everest
(["Yes",
"700",
"END"])










