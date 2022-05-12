function minNumber(input){
    index = 0;
    let command = input[index];
    index++;

   let minNum = Number.MAX_SAFE_INTEGER;

    while(command !== "Stop"){
        let number = Number(command);
        
        if(minNum > number){
            minNum = number;
        }
        command = input[index];
         index++;
       
    }
    console.log(minNum);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"])
