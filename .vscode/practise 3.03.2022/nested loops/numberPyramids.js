function pyramid(input){
    let n = Number(input[0]);
    let currNum = 0;
    let isEqual = false;

    for(let rows = 1; rows <= n; rows++){ // за редове
    let printLine = '';
        for(let cols = 1; cols <= rows; cols++) { // за колони
currNum++;
printLine += currNum + " ";// 2 3
 if(currNum === n){
     isEqual = true;
     break;
 }

        } 
        console.log(printLine); // 1 
                                // 2
                                // 3
      if(isEqual){
          break;
      }
    }



}
pyramid(["7"])