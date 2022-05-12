function moving(input){
index = 0;
let w = Number(input[index]);
index++;
let l = Number(input[index]);
index++;
let h = Number(input[index]);
index++;
let size = w * l * h;
let isSizeLeft = true;
let command = input[index];
index++;

while(command !== "Done"){
let spaceGiven = Number(command);
size -= spaceGiven;

if(size < 0){
isSizeLeft = false;
break;
}
command = input[index];
index++;
}



if(isSizeLeft){
  console.log(`${size} Cubic meters left.`)  
}
else{
    console.log(`No more free space! You need ${Math.abs(size)} Cubic meters more.`);
}

}



moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

