function cake(input){
    let width = Number(input[0]);
    let length = Number(input[1])
    let size = width * length;
    let index = 2; 
    let command = input[index];
    index++;
    let isPiecesLeft = true;
    
    while(command !== "STOP"){
    let pieceGiven = Number(command);
    size -= pieceGiven;

   if(size < 0){
   isPiecesLeft = false;
   break;
   }

   command = input[index];
        index++;

 

    }
    if(isPiecesLeft){
        console.log(`${size} pieces are left.`);
    }
    else{
        console.log(`No more cake left! You need ${Math.abs(size)} pieces more.`)
    }
    
}


cake(["10",
"2",
"2",
"4",
"6",
"STOP"])
