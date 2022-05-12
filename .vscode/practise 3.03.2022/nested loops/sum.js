function sum2numbers(input){
let start = Number(input[0]);
let end = Number(input[1]);
let n = Number(input[2]);
let counter = 0;
let isFound = false;
for(let x = start; x <= end; x++){
    for(let y = start; y <= end; y++){
       counter++;
        let res = x + y;

       if(res === n){
           console.log(`Combination N:${counter} (${x} + ${y} = ${n})`)
           isFound = true;
           break;
       }
    }
    if(isFound){
        break;
    }
   
}
if(!isFound){
    console.log(`${counter} combinations - neither equals ${n}`);
}

}
sum2numbers(["23",
"24",
"20"])
