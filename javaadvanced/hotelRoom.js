function room(input){
let month = input[0];
let nights = Number(input[1]);

let type;
// if month
// switch nights  

if(month === "May" || month === "October"){
if(nights > 7 && nights <= 14){ 
           let studioPrice = (nights * 50) - (0.05 * (nights * 50));
           let apartmentPrice = nights * 65;
           console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
           console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);        
    }
    else if(nights > 14){
        let studioPrice = (nights * 50) - (0.30 * (nights *50));
        let apartmentPrice = (nights * 65) - (0.10 * (nights * 65));
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    }

else {
            let studioPrice = nights * 50;
            let apartmentPrice = nights * 65;
            console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);  
    }
}

if(month === "June" || month === "September"){
    if(nights > 14){
        let studioPrice = (nights * 75.20) - (0.20 * (nights * 75.20));
        let apartmentPrice = (nights * 68.70) - (0.10 * (nights * 68.70));
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    }
    else{
        let studioPrice = nights * 75.20;
        let apartmentPrice = nights * 68.70;
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    }
}

if(month === "July" || month === "August"){
    if(nights > 14){
        let studioPrice = nights * 76;
        let apartmentPrice = (nights * 77) - (0.10 * (nights * 77));
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    }
    else{
        let studioPrice = nights * 76;
        let apartmentPrice = nights * 77;
        console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
        console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    }
}
}

room(["August",
"20"])


