function worldSnooker(input){
let stage = input[0];
let type = input[1];
let countTickets = Number(input[2]);
let picture = input[3];
let price = 0;
let total = 0;
let finalPrice = 0;



if(stage === "Quarter final"){
switch(type){
    case "Standard":
price = countTickets * 55.50;
total += price;
break;
case "Premium":
    price = countTickets * 105.20;
    total += price;
    break;
    case "VIP":
        price = countTickets * 118.90;
        total += price;
        break;
}
}

if(stage === "Semi final"){
    switch(type){
        case "Standard":
    price = countTickets * 75.88;
    total += price;
    break;
    case "Premium":
        price = countTickets * 125.22;
        total += price;
        break;
        case "VIP":
            price = countTickets * 300.40;
            total += price;
            break;
    }
    }
    
if(stage === "Final"){
    switch(type){
        case "Standard":
    price = countTickets * 110.10;
    total += price;
    break;
    case "Premium":
        price = countTickets * 160.66;
        total += price;
        break;
        case "VIP":
            price = countTickets * 400;
            total += price;
            break;
    }
    }
 if(total > 4000){
    if(picture === "Y"){
        finalPrice = 0.75 * total;
    }
    else if(picture === "N"){
        finalPrice = 0.75 * total;
    }
 }
else if (total > 2500 && total <= 4000){
    if(picture === "Y"){
       finalPrice = total * 0.90 + (countTickets * 40);
    }
    else if(picture === "N"){
        finalPrice = 0.90 * total;
    }
}
else{
    if(picture === "Y"){
        finalPrice = total + (countTickets * 40);
     }
     else if(picture === "N"){
         finalPrice = total;
     }
}
  
console.log(finalPrice.toFixed(2));

}
worldSnooker(["Semi final",
"VIP",
"9",
"Y"])


