function solve(input) {
    let index = 0;
    let target = Number(input[index++]);
    let jumps = 0;
    let fails = 0;
    let tempHight = 0;
    let start = target - 30;
    while (index < input.length) {
        let currentJump = Number(input[index++]);
        jumps++;
        if (currentJump > start) {
            if (currentJump > target) {
                console.log(`Tihomir succeeded, he jumped over ${start}cm after ${jumps} jumps.`);
                break;
            }
            start += 5;
            fails = 0;
        }else {
            fails++;
            if (fails === 3) {
                console.log(`Tihomir failed at ${start}cm after ${jumps} jumps.`);
                break;
            }
        }
     
    }
}
solve(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])