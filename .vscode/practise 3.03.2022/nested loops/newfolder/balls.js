function balls(input){
   let index = 0;
   let numBalls = Number(input[index]);
   index++;
   let nameBalls = input[index];
   let pointsCounter = 0;
   let redCounter = 0;
   let orangeCounter = 0;
   let yellowCounter = 0;
   let whiteCounter = 0;
   let blackCounter = 0;
   let otherColoursCounter = 0;
   for(i = 0; i < numBalls; i++){
   nameBalls = input[index];

   index++;

   if(nameBalls === "red"){
       redCounter++;
       pointsCounter += 5;

   }
   else if(nameBalls === "orange"){
       orangeCounter++;
       pointsCounter += 10;
   }
   else if(nameBalls === "yellow"){
       yellowCounter++;
       pointsCounter += 15;
   }
   else if(nameBalls === "white"){
       whiteCounter++;
       pointsCounter += 20;
   }
   else if(nameBalls === "black"){
       blackCounter++;
       pointsCounter = Math.floor(pointsCounter / 2); 
   } 
   else{
       otherColoursCounter++;
   }
 
   }
   console.log(`Total points: ${pointsCounter}`);
console.log(`Red balls: ${redCounter}`);
console.log(`Orange balls: ${orangeCounter}`);
console.log(`Yellow balls: ${yellowCounter}`);
console.log(`White balls: ${whiteCounter}`);
console.log(`Other colors picked: ${otherColoursCounter}`);
console.log(`Divides from black balls: ${blackCounter}`);

}
balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])
