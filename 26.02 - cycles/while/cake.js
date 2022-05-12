function cake(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let cakeSize = width * length; // броят на парчетата = 10 * 10 = 100 
    index = 2;
    let command = input[index];
   index++;
   let isCake = true;

     


    while(command !== "STOP"){
        let  piecesLeft = Number(command);
        cakeSize -= piecesLeft;

        if(cakeSize < 0){
            isCake = false;
            break;
        }
        command = input[index];
        index++;
        


    }
   if(isCake){
       console.log(`${cakeSize} pieces are left.`)
   } else{
       console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
   }
    
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])


