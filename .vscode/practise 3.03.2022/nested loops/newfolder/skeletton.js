function race(input){
let minutesRace = Number(input[0]) * 60; // Превръщам в секунди
let secondsRace = Number(input[1]);
let lengthInMeters = Number(input[2]);
let secondsFor100Meters = Number(input[3]);
let totalControl = minutesRace + secondsRace;

let slow = (lengthInMeters / 120) * 2.5;
let totalRace = (lengthInMeters / 100 ) * secondsFor100Meters - slow;

if(totalRace <= totalControl){
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${totalRace.toFixed(3)}.`);
}
else if(totalRace > totalControl){
    let diff = Math.abs(totalRace - totalControl);
    console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`)
}

}
race(["1",
"20",
"1546",
"12"])

