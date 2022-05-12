function finalCompetition(input){
    let countDancer = Number(input[0]);
    let countPoints = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let price = 0;
    
    if(place === "Bulgaria"){
        price = countPoints * countDancer;
    }
    else if(place === "Abroad"){
        price = (countPoints * countDancer) + 0.50 * (countPoints * countDancer);
    }
   
            if(season === "summer" && place === "Bulgaria"){
         price *= 0.95;
            }
            else if(season === "winter" && place === "Bulgaria"){
                price *= 0.92;
            }
                
            if(season === "summer" && place === "Abroad"){
                price *= 0.90;
            }
            else if(season === "winter" && place === "Abroad"){
                price *= 0.85;
            }

            
             
               
    let charity = price * 0.75;
    let moneyLeft = (price - charity);
    
    let moneyPerDancer = moneyLeft / countDancer;
    console.log(`Charity - ${(charity).toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
     
    
    }
    finalCompetition(["25",
    "98",
    "winter",
    "Bulgaria"])