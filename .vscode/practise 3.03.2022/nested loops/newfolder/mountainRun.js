function mountainRun(input){
let recordInS = Number(input[0]);
let distanceInM = Number(input[1]);
timePerMeterInS = Number(input[2]);
let slowmo =  Math.floor((distanceInM / 50)) * 30;
let georgiTime = (distanceInM * timePerMeterInS) + slowmo;

let diff = georgiTime - recordInS;

if(georgiTime < recordInS){
    console.log(`Yes! The new record is ${georgiTime.toFixed(2)} seconds.`);
}
else{
    console.log(`No! He was ${Math.abs(diff).toFixed(2)} seconds slower.`);
}
}
mountainRun(["1377",
"389",
"3"])
