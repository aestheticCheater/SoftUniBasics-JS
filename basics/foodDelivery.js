function foodmenus(input){
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let veggieMenuCount = Number(input[2]);
    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let veggieMenuPrice = 8.15;
    let deliveryPrice = 2.50;
    
    let desertPrice = ((chickenMenuCount * chickenMenuPrice) + (fishMenuCount * fishMenuPrice) + (veggieMenuCount * veggieMenuPrice)) * 0.20;
    let totalSum = (chickenMenuCount * chickenMenuPrice) + (fishMenuCount * fishMenuPrice) + (veggieMenuCount * veggieMenuPrice) + desertPrice + deliveryPrice;
    console.log(totalSum);
}
foodmenus(["2","4","3"])