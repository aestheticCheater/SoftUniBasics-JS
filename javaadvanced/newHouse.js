function garden(input) {
    const rosePrice = 5;
    const daliaPrice = 3.80;
    const lalePrice = 2.80;
    const narcisPrice = 3;
    const gladiolaPrice = 2.50;

    let flowerType = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;


switch(flowerType){
   case "Roses": 
   price = quantity * rosePrice;
   if (quantity > 80){
       price = price * 0.90;
   }
   break;
   case "Dahlias":
   price = quantity * daliaPrice;
   if (quantity > 90) {
       price = price * 0.85;
   }    
   break;
   case "Tulips":
   price = quantity * lalePrice;
   if ( quantity > 80) {
       price = price * 0.85;
   }
   break;
   case "Narcissus": 
   price = quantity * narcisPrice;
   if(quantity < 120) {
       price = price * 1.15;
   }
   break;
   case "Gladiolus":
       price = quantity * gladiolaPrice;
       if(quantity < 80) {
           price = price * 1.20;
       }
   break;

    }



    let moneyleft = Math.abs(budget - price);
    if (budget > price) {
        console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${moneyleft.toFixed(2)} leva left.`);
    }
    else if (budget < price) {
        console.log(`Not enough money, you need ${moneyleft.toFixed(2)} leva more.`);
    }


}


garden(["Narcissus",
"119",
"360"])



