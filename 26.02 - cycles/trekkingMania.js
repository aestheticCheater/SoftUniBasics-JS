function trekking(input){
    index = 0;
let groupCount = Number(input[index]);
index++;

let p1Counter = 0;

let p2Counter = 0;

let p3Counter = 0;

let p4Counter = 0;

let p5Counter = 0;
let peopleTotal = 0;

for(let i = 0; i < groupCount; i++){
let peopleCount = Number(input[index]);
index++;
peopleTotal =+ peopleCount;


if(peopleCount <= 5){
    let Musala = peopleCount / peopleTotal * 100;
}
else if(peopleCount >=6 && peopleCount <= 12){
    p2Counter++;
}
else if(peopleCount >=13 && peopleCount <= 25){
    p3Counter++;
}
else if(peopleCount >=26 && peopleCount <= 40){
    p4Counter++;
}
else{
    p5Counter++;
}



}
let peopleTotal = peopleCount;
let p1Percentage = p1Counter / peopleTotal * 100;
let p2Percentage = p2Counter / peopleTotal * 100;
let p3Percentage = p3Counter / peopleTotal * 100;
let p4Percentage = p4Counter / peopleTotal * 100;
let p5Percentage = p5Counter / peopleTotal * 100;


console.log(`${p1Percentage.toFixed(2)}%`);
console.log(`${p2Percentage.toFixed(2)}%`);
console.log(`${p3Percentage.toFixed(2)}%`);
console.log(`${p4Percentage.toFixed(2)}%`);
console.log(`${p5Percentage.toFixed(2)}%`);


}
trekking(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
