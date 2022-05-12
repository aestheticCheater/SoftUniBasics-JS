function bonuscalculate(input) {
    let startnum = Number(input[0]);
    let bonus = 0;
    
 
    if (startnum <= 100) {
     bonus = 5;
    }

    else if(startnum > 1000) {
     bonus = 0.10 * startnum;
       
    }
    else {
     bonus = 0.20 * startnum;
      
    }  
    if(startnum % 2 === 0) {
        bonus = bonus + 1;
        }
    else if(startnum % 10 === 5){
     bonus = bonus + 2;
    }
    console.log(bonus);
    console.log(startnum + bonus);
    
}
bonuscalculate(["15875"])