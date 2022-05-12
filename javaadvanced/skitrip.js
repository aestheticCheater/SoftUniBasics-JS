function trip(input){
    let days = Number(input[0]);
    let type = input[1];
    let score = input[2];
    nights = days - 1;
    const roomforonepersonPrice = 18;
    const apartment = 25;
    const presidentApartment = 35;

    if(days < 10){
        if(type === "room for one person"){
            price = nights * roomforonepersonPrice;
        }
        else if(type === "apartment"){
            price = (nights * apartment) - (0.30 * nights * apartment);
        }
        else if(type === "president apartment"){
            price = (nights * presidentApartment) - (0.10 * nights * presidentApartment);
        }
        if(score === "positive"){
            price = price + 0.25 * price;
        }
        else if(score === "negative"){
            price = price - 0.10 * price;
        }
    }
    else if(days >= 10 && days <= 15){
        if(type === "room for one person"){
            price = (nights * roomforonepersonPrice);
        }
        else if(type === "apartment"){
            price = (nights * apartment) - (0.35 * nights * apartment);
        }
        else if(type === "president apartment"){
            price = (nights * presidentApartment) - (0.15 * nights * presidentApartment);
        }
        if(score === "positive"){
            price = price + 0.25 * price;
        }
        else if(score === "negative"){
            price = price - 0.10 * price;
        }
    }
   else {
       if(type === "room for one person"){
           price = nights * roomforonepersonPrice;
       }
       else if(type === "apartment"){
           price = (nights * apartment) - (0.50 * nights * apartment);
       }
       else if(type === "president apartment"){
           price = (nights * presidentApartment) - (0.20 * nights * presidentApartment);
       }
if(score === "positive"){
    price = price + 0.25 * price;
}
else if(score === "negative"){
    price = price - 0.10 * price;
}

   }

   
console.log(`${price.toFixed(2)}`);

}
trip(["30",
"president apartment",
"negative"])

