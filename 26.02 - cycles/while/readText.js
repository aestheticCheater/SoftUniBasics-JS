function readtext(input){
    let index = 0;
    let command = input[index];
    index++;

    while(command !== "Stop"){
     console.log(command);
     command = input[index];
     index++ 
    }
}
readtext(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])

