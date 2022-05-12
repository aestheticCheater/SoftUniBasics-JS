function workout(input){
let days = Number(input[0]);

let kilometers = Number(input[1]);

let kilometersTotal = 0;
let index = 2;
let firstDay = kilometers;


for(let i = 0; i < days; i++){
let percentPerDay = Number(input[index]) / 100;
index++;
kilometers = kilometers + kilometers * percentPerDay;
 kilometersTotal += kilometers;

}

kilometersTotal += firstDay;
let diff = Math.abs(kilometersTotal - 1000);

if(kilometersTotal >= 1000){
    console.log(`You've done a great job running ${Math.ceil(diff)} more kilometers!`);
}
else if(kilometersTotal < 1000){
    console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`);
}

}
workout(["4",
"100",
"30",
"50",
"60",
"80"])


