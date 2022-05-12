function aluminium(input){
let countAluminium = Number(input[0]);
let typeAluminium = input[1];
let orderType = input[2];
let total = 0;

if(countAluminium > 10){
 if(typeAluminium === "100X150"){
     if(countAluminium > 10 && countAluminium <= 40){
     140 * countAluminium;
     }
    if(countAluminium > 40 && countAluminium <= 80){
        
        total = (140 * countAluminium) * 0.94;}
        else if(countAluminium > 80){
            total = (140 * countAluminium) * 0.90;}
    }
    

        if(typeAluminium === "90X130"){
            if(countAluminium > 10 && countAluminium <= 30){
                total = 110 * countAluminium;
            }
            else if(countAluminium > 30 && countAluminium <= 60){
                total = (110 * countAluminium) * 0.95;
            }
            else if(countAluminium > 60){
                total = (110 * countAluminium) * 0.92;
            }
        }
        if(typeAluminium === "130X180"){
            if(countAluminium > 10 && countAluminium <= 20){
                total = 190 * countAluminium;
            }
            else if(countAluminium > 20 && countAluminium <= 50){
                total = (190 * countAluminium) * 0.93;
            }
            else if(countAluminium > 50){
                total = (190 * countAluminium) * 0.88;
            }
        }
        if(typeAluminium === "200X300"){
            if(countAluminium > 10 && countAluminium <= 25){
                total = 250 * countAluminium;
            }
            else if(countAluminium > 25 && countAluminium <= 50){
                total = (250 * countAluminium) * 0.91;
            }
            else if(countAluminium > 50){
                total = (250 * countAluminium) * 0.86;
            }
        }

        if(orderType === "With delivery"){
            total += 60;
        }
         else if(orderType === "Without delivery"){
            total = total;
        }
        if(countAluminium > 99){
            total *= 0.96;
        }

        console.log(`${total.toFixed(2)} BGN`);
}
else if(countAluminium < 10){
    console.log("Invalid order");
}

}



aluminium(["2",
"130X180",
"With delivery"])



