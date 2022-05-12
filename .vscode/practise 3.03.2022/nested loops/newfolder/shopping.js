function shopping(input){
let  videocard = 250;
let budget = Number(input[0]);
let countVideocards = Number(input[1]);
let countProcessors = Number(input[2]);
let countRam = Number(input[3]);
let rpm = 0.35 * (videocard * countVideocards);
let ram = 0.10 * (videocard * countVideocards);
let total = (videocard * countVideocards) + (rpm * countProcessors) + (ram * countRam)
if(countVideocards > countProcessors){
total *= 0.85;
}
if(total <= budget){
    console.log(`You have ${(budget - total).toFixed(2)} leva left!`)
}
else{
    console.log(`Not enough money! You need ${Math.abs((budget - total)).toFixed(2)} leva more!`);
}

}
shopping(["920.45",
"3",
"1",
"1"])

