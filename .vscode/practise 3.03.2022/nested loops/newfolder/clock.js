function clock(){
for(let i = 0; i < 23; i++){
    for(let j = 0; j < 59; j++){
        
        for(let s = 0; s < 59; s++){
            if(s < 10){
                console.log(`${i}:${j}:0${s}`);
            }
            else if (j < 10){
                    console.log(`${i}:0${j}:${s}`);
                }
            
            else{
                console.log(`${i}:${j}:${s}`);
            }
        }
    }
}

}
clock()