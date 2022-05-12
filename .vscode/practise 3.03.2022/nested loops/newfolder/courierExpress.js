function express(input){
let weight = Number(input[0]);
let service = input[1];
let distanceInKm = Number(input[2]);
let cost = 0;
let nadcenkaKM = 0;
let nadcenkaKG = 0;
let nadcenkaTotal = 0;
let price1 = 0.03;
let price2 = 0.05;
let price3 = 0.10;
let price4 = 0.15;
let price5 = 0.20;
switch(service){
case "standard":
    if(weight > 0 && weight < 1){
    cost = distanceInKm * price1;
    
    }
    else if(weight >= 1 && weight < 10){
    cost = distanceInKm * price2;
    }
    else if(weight >= 10 && weight < 40){
        cost = distanceInKm * price3;
    }
    else if(weight >= 40 && weight < 90){
        cost = distanceInKm * price4;
    }
    else {
 cost = distanceInKm * price5;
    }
    break;
    case "express":
        if(weight > 0 && weight < 1){
            cost = distanceInKm * price1;
            nadcenkaKG = 0.80 * price1;
            nadcenkaKM = weight * nadcenkaKG;
            nadcenkaTotal = distanceInKm * nadcenkaKM;
            cost += nadcenkaTotal;
            }
            else if(weight >= 1 && weight < 10){
                cost = distanceInKm * price2;
                nadcenkaKG = 0.40 * price2;
                nadcenkaKM = weight * nadcenkaKG;
                nadcenkaTotal = distanceInKm * nadcenkaKM;
                cost += nadcenkaTotal;
            }
            else if(weight >= 10 && weight < 40){
                cost = distanceInKm * price3;
                nadcenkaKG = 0.05 * price3;
                nadcenkaKM = weight * nadcenkaKG;
                nadcenkaTotal = distanceInKm * nadcenkaKM;
                cost += nadcenkaTotal;
            }
            else if(weight >= 40 && weight < 90){
                cost = distanceInKm * price4;
                nadcenkaKG = 0.02 * price4;
                nadcenkaKM = weight * nadcenkaKG;
                nadcenkaTotal = distanceInKm * nadcenkaKM;
                cost += nadcenkaTotal;
            }
            else {
                cost = distanceInKm * price5;
                nadcenkaKG = 0.01 * price5;
                nadcenkaKM = weight * nadcenkaKG;
                nadcenkaTotal = distanceInKm * nadcenkaKM;
                cost += nadcenkaTotal;
            }
            break;
}

console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${cost .toFixed(2)} lv.`);
}
express(["87",
"express",
"130"])



