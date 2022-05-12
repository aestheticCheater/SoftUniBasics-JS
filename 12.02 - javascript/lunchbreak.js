function isTimeEnough(input) {
let animeName = (input[0]);
let animeEpisodeTime = Number(input[1]);
let lunchbreakTime = Number(input[2]);
let lunchTime = lunchbreakTime / 8;
let breakTime = lunchbreakTime / 4;
let usedTime = animeEpisodeTime + lunchTime + breakTime;
let lefttime = Math.abs(lunchbreakTime - usedTime);
if (usedTime <= lunchbreakTime) {
    console.log(`You have enough time to watch ${animeName} and left with ${Math.ceil(lefttime)} minutes free time.`);
}
else {
    console.log(`You don't have enough time to watch ${animeName}, you need ${Math.ceil(lefttime)} more minutes.`)
}

}
isTimeEnough(["Teen Wolf",
"48",
"60"])

