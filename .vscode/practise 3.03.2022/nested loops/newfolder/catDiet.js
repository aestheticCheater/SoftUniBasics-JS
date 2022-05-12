function catsDiet(input){
    let fatPerGram = 9;
    let proteinPerGram = 4;
    let carbohydratePerGram = 4;
    let percentageFat = Number(input[0]) / 100;
    let percentageProtein = Number(input[1]) / 100;
    let percentageCarb = Number(input[2]) / 100;
    let kcal = Number(input[3]);
    let percentageWater = Number(input[4]) / 100;

let totalGrams =  ((percentageFat * kcal) / fatPerGram) + ((percentageProtein * kcal) / proteinPerGram) + ((percentageCarb * kcal) / carbohydratePerGram);
let caloriesPerGram = kcal / totalGrams;
let caloriesNoWater = caloriesPerGram - (caloriesPerGram * percentageWater);

    console.log(`${caloriesNoWater.toFixed(4)}`);
}
catsDiet(["40",
"40",
"20",
"3000",
"40"])


