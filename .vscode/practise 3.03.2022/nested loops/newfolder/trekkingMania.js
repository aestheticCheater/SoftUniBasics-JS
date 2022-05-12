function trekking(input){
index = 0;
countGroups = Number(input[index]);
index++;

let group1 = 0;
let group2 = 0;
let group3 = 0;
let group4 = 0;
let group5 = 0;

let countPeople = 0;

let gr1Percentage = 0;
let gr2Percentage = 0;
let gr3Percentage = 0;
let gr4Percentage = 0;
let gr5Percentage = 0;

for(let i = 1; i <= countGroups; i++){
let peopleinGroups = Number(input[index]);

if(peopleinGroups <= 5){
    group1 += peopleinGroups;
}
else if(peopleinGroups >= 6 && peopleinGroups <= 12){
    group2 += peopleinGroups;
}
else if(peopleinGroups >= 13 && peopleinGroups <= 25){
    group3 += peopleinGroups;
}
else if(peopleinGroups >= 26 && peopleinGroups <= 40){
    group4 += peopleinGroups;
}
else{
    group5 += peopleinGroups;
}


countPeople = group1 + group2 + group3 + group4 + group5;

 gr1Percentage = group1 / countPeople * 100;
 gr2Percentage = group2 / countPeople * 100;
 gr3Percentage = group3 / countPeople * 100;
 gr4Percentage = group4 / countPeople * 100;
 gr5Percentage = group5 / countPeople * 100;

 

peopleinGroups = Number(input[index]);
index++;
}
console.log(`${gr1Percentage.toFixed(2)}%`);
console.log(`${gr2Percentage.toFixed(2)}%`);
console.log(`${gr3Percentage.toFixed(2)}%`);
console.log(`${gr4Percentage.toFixed(2)}%`);
console.log(`${gr5Percentage.toFixed(2)}%`);

}
trekking(["5",
"25",
"41",
"31",
"250",
"6"])
