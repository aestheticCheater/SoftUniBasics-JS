function order(input){
    let fruit = input[0];
    let type = input[1];
    let countOrder = input[2];
    let discount = 0;
    let pricePerSet = 0;
    let finalPrice = 0;

    if (type === "small"){
    switch(fruit){
        case "Watermelon":
        pricePerSet = 2 * 56;
        break;
        case "Mango":
            pricePerSet = 2 * 36.66;
            break;
            case "Pineapple":
                pricePerSet = 2 * 42.10;
                break;
                case "Raspberry":
                    pricePerSet = 2 * 20;
                    break;

    }

    }
    else if(type === "big"){
        switch(fruit){
            case "Watermelon":
            pricePerSet = 5 * 28.70;
            break;
            case "Mango":
                pricePerSet = 5 * 19.60;
                break;
                case "Pineapple":
                    pricePerSet = 5 * 24.80;
                    break;
                    case "Raspberry":
                        pricePerSet = 5 * 15.20;
                        break;
    }

}

let orderPrice = countOrder * pricePerSet;

if(orderPrice >= 400 && orderPrice <= 1000){
    discount = 0.15 * orderPrice;
    finalPrice = orderPrice - discount;
}
else if(orderPrice > 1000){
    discount = 0.50 * orderPrice;
    finalPrice = orderPrice - discount;
}
else {
    finalPrice = orderPrice;
}

console.log(`${finalPrice.toFixed(2)} lv.`);
}
order(["Mango",
"big",
"8"])

