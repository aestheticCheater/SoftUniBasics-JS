// трябва да  зануля failcounter ако след него опита е бил успешен


function jump(input){
let index = 0;
let goal = Number(input[index]);
index++;
let jump = Number(input[index]);
let letvaHeight = goal - 30;
let jumpCounter = 0;
let failedJumpCounter = 0;

while(jump < goal){
jump = Number(input[index]);
index++;
jumpCounter++;
if(jump > goal){
    console.log(`Tihomir succeeded, he jumped over ${letvaHeight}cm after ${jumpCounter} jumps.`);
    break;
}
if(jump > letvaHeight){
    letvaHeight += 5;
    failedJumpCounter = 0;
    continue;
}
else if(jump <= letvaHeight){
    failedJumpCounter++;
    if(failedJumpCounter >= 3){
        console.log(`Tihomir failed at ${letvaHeight}cm after ${jumpCounter} jumps.`);
        break;
    }
    continue;
}

index++;
}
}
jump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])

