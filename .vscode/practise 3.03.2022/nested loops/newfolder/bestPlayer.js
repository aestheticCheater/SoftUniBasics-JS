function best(input){
    let index = 0;
    let command = input[index];
    index++;
    let player = "";
    let max = 0;
    let best = "";
    
    while(command !== "END"){
        let namePlayer = command;
        command++;
        let goals = Number(input[index]);
        index++;
        player = input[namePlayer];
       
     if(goals > max){
         max = goals;
         best = namePlayer;
     }
    
     if(max >= 10){
         break;
     }
    
        command = input[index];
        index++;
    }
    
    console.log(`${best} is the best player!`);
    if(max >= 3){
        console.log(`He has scored ${max} goals and made a hat-trick !!!`);
    }
    else{
    console.log(`He has scored ${max} goals.`);
    }
    }
best(["Neymar", "2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])
