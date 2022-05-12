//Напишете функция, която чете елементите на масив, докато не получи командата "Stop".

function readingText(input){
let index = 0;
let command = input[index];
index++;

while(command !== "Stop"){
    console.log(command);
    command = input[index];
    index++;
}
}



readingText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
