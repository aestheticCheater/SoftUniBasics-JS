function vacation(input){
   let index = 0;
let moneyNeeded = Number(input[index]);
index++;
let budget = Number(input[index]);
index++;
let spentCount = 0;
let dayCount = 0;
let ismoneyEnough = false;

while(budget <= moneyNeeded){
let action = input[index];
index++;
let suma = Number(input[index]);
index++;
dayCount++; 



if(action === "save"){
    budget += suma;
}
else
{
    budget -= suma;
    spentCount++;
    if(budget < 0){
        budget = 0;
    }
}

if(spentCount === 5){
    
    console.log("You can't save the money.");
    console.log(`${dayCount}`);
    ismoneyEnough = true;
    break;
}

}
if(!ismoneyEnough){
console.log(`You saved the money for ${dayCount} days.`)
}
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])






