function Record(input){
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timePerMeterInSeconds = Number(input[2]);
    let slowdownSeconds = Math.floor(distanceMeters / 15) * 12.5;
    let ivanchoRecordSeconds = timePerMeterInSeconds * distanceMeters + slowdownSeconds;
    
    if(ivanchoRecordSeconds < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${ivanchoRecordSeconds.toFixed(2)} seconds.`);
    }
    else if(ivanchoRecordSeconds >= recordSeconds) {
        let diff = ivanchoRecordSeconds - recordSeconds;
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }
}

Record(["55555.67",
"3017",
"5.03"])


