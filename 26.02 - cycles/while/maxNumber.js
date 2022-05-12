function maxNumber(input){
index = 0;
let command = (input[index]);
index++;
let maxNum = Number.MIN_SAFE_INTEGER;

while(command !== "Stop"){
    let number = Number(command);
    
if(maxNum < number){
    maxNum = number;
}
command = input[index];
    index++;
    
}
console.log(maxNum)


}

maxNumber(["-1",
"-2",
"Stop"])

