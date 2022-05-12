function sumSeconds(input) {
let timeFirst = Number(input[0]); //35
let timeSecond = Number(input[1]); // 45
let timeThird = Number(input[2]); //44
let totalTime = timeFirst + timeSecond + timeThird;
let minutes = Math.floor(totalTime / 60);
let seconds = totalTime % 60;
if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
}
else {
    console.log(`${minutes}:${seconds}`);
}

}

sumSeconds(["35", "45", "44"])
