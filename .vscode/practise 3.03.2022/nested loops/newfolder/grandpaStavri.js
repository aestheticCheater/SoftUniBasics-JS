function grandpa(input){
let days = Number(input[0]);
let totalRakia = 0;
let totaldegree = 0;
let index = 1;

for(let i = 0; i < days; i++){
let rakia = Number(input[index]);
index++;
let degree = Number(input[index]);
index++;
totalRakia += rakia;
totaldegree += rakia * degree

}
let avgDegree = totaldegree / totalRakia;
console.log(`Liter: ${totalRakia.toFixed(2)}`);
console.log(`Degrees: ${avgDegree.toFixed(2)}`);


if(avgDegree < 38){
    console.log("Not good, you should baking!");
}
else if(avgDegree >= 38 && avgDegree <= 42){
    console.log("Super!");
}
else{
    console.log("Dilution with distilled water!");
}

}
grandpa(["3",
"100",
"45",
"50",
"55",
"150",
"36"])
