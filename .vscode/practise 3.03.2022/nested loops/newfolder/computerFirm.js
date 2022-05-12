function computerFirm(input){
let num = Number[input[0]];
let index = 1;
let rateAndNum = Number(input[index]);
let confirmedSales = 0;
let avg = 0;
let totalRating = 0;
let countComputers = 0;
for(let i = 1; i < input.length; i++){
rateAndNum = Number(input[index]);
index++;
let str = rateAndNum.toString();
let rating = str.charAt(str.length-1);  // lastDigit
let maxSales = str.substring(0, 2); 
countComputers++;
if(rating === "2"){
    confirmedSales += 0;
}
else if(rating === "3"){
    confirmedSales += maxSales / 2;
}
else if(rating === "4"){
    confirmedSales += maxSales * 0.70;
}
else if(rating === "5"){
    confirmedSales += maxSales * 0.85;
}
else if(rating === "6"){
    confirmedSales += maxSales * 1;
}
totalRating += parseInt(rating)
}

avg = totalRating / countComputers;
console.log(confirmedSales.toFixed(2));
console.log(avg.toFixed(2));
}

computerFirm(["2",
"204",
"206"])



