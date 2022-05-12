function greening(input){
    let squareMeters = Number(input[0]);
    let squareMeterPrice = 7.61;
    let discount = 0.18;
    let finalPrice = (squareMeters * squareMeterPrice) - ((squareMeters * squareMeterPrice)*discount);
    let finalDiscount = ((squareMeters * squareMeterPrice)*discount);

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${finalDiscount} lv.`);
}

greening(["550"]);