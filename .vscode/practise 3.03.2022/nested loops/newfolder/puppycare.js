function puppy(input){
    index = 0;
    let foodBoughtInKg = Number(input[index]) * 1000; // превръщам в грамове, за да работя в една мерна единица
    index++;
    let command = input[index];
    index++;
    let foodEaten = 0;
     
    while(command !== "Adopted"){
        let foodInGrams = Number(command);
        command++;
        foodEaten += foodInGrams;
     
    if(command === "Adopted"){
        break;
    }
     
    command = input[index];
    index++;
    }
    let fooddiff = Math.abs((foodBoughtInKg - foodEaten));
    if(foodBoughtInKg >= foodEaten){
        console.log(`Food is enough! Leftovers: ${fooddiff} grams.`);
    }
    else{
        console.log(`Food is not enough. You need ${fooddiff} grams more.`);
    }
    }
    puppy(["4",
    "130",
    "345",
    "400",
    "180",
    "230",
    "120",
    "Adopted"])



