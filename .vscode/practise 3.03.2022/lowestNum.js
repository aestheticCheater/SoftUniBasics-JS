function lowestNum(input){
// Напишете функция, която до получаване на командата "Stop", чете цели числа,
// и намира най-малкото измежду тях. Въвежда се по едно число на ред. 
index = 0;
let command = input[index];
index++;
let num = Number.MAX_SAFE_INTEGER;

while(command !== "Stop"){
let number = Number(command);

if(num > number){
    num = number;
}

command = input[index];
index++;


}
console.log(num);
}
lowestNum(["100",
"99",
"80",
"70",
"Stop"])
