function food(input){
    let dogFoodCount = Number(input[0]);
    let catFoodCount = Number(input[1]);
    let catFoodPrice = catFoodCount * 4.00;
    let dogFoodPrice = dogFoodCount * 2.50;
    let totalSum = catFoodPrice + dogFoodPrice;

    console.log(`${totalSum} lv.`);
}
food(["5","4"])