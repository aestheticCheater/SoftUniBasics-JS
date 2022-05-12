function petShop(input){
  let index = 0;

 let totalDays = Number(input[index]);
 index++;
 let totalFood = Number(input[index]);
 index++;
 let eatenDogFood = 0;
 let eatenCatFood = 0;
 let totalFoodEaten = 0
 let buscuits = 0;  

 for(i = 1; i <=  totalDays; i++){
     let foodEatenByDog = Number(input[index]);
     index++;
     let foodEatenByCat = Number(input[index]);
     index++;
    
     totalFoodEaten += foodEatenByDog + foodEatenByCat;
     eatenCatFood += foodEatenByCat;
     eatenDogFood += foodEatenByDog;


     if(i % 3 === 0){
  buscuits += (foodEatenByCat + foodEatenByDog) * 0.10;
     }
 }

let eatenFoodPercentage =  totalFoodEaten / totalFood * 100;
let eatenDogFoodPercentage = eatenDogFood / totalFoodEaten * 100;
let eatenCatFoodPercentage = eatenCatFood / totalFoodEaten * 100;
console.log(`Total eaten biscuits: ${Math.round(buscuits)}gr.`);
console.log(`${eatenFoodPercentage.toFixed(2)}% of the food has been eaten.`);
console.log(`${eatenDogFoodPercentage.toFixed(2)}% eaten from the dog.`);
console.log(`${eatenCatFoodPercentage.toFixed(2)}% eaten from the cat.`);

}
petShop(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"])
