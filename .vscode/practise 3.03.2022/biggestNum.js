function biggestnum(input){
    /* Напишете функция, която до получаване на командата "Stop", 
    чете цели числа и намира най-голямото измежду тях. Въвежда се по едно число на ред.  */
let index = 0;
let command = input[index];
index++;
let num = Number.MIN_SAFE_INTEGER;

while(command !== "Stop"){
    let number = Number(command);
if(num < number){
    num = number;
}
command = input[index];
index++;

}
console.log(num)

}  
biggestnum(["100",
"99",
"80",
"70",
"Stop"])
