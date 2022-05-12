function uniquePincodes(input){
let maxN1 = Number(input[0]);
let maxN2 = Number(input[1]);
let maxN3 = Number(input[2]);

for(let num1 = 2; num1 <= maxN1; num1 += 2){
    for(let num2 = 2; num2 <= maxN2; num2++){
        for(let num3 = 2; num3 <= maxN3; num3 += 2) {
            if (num2 == 2 || num2 == 3 || num2 == 5 || num2 == 7){
                console.log(`${num1} ${num2} ${num3}`);
            }
}}}}
uniquePincodes(["8",
"2",
"8"])