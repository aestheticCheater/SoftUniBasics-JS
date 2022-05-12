function calc(input){
let countPeople = Number(input[0]);
let season = input[1];
let priceForOne = 0;
let price = 0;

if(countPeople <= 5){
switch(season){
case "spring":
    priceForOne = 50;
    price = countPeople * priceForOne;
break;
case "summer":
    priceForOne = 48.50;
    price = (countPeople * priceForOne) * 0.85;
    break;
    case "autumn":
        priceForOne = 60.00;
        price = countPeople * priceForOne;
        break;
        case "winter":
            priceForOne = 86.00;
            price = (countPeople * priceForOne) * 1.08;
            break;
}


}
else if(countPeople > 5){
    switch(season){
        case "spring":
            priceForOne = 48.00;
            price = countPeople * priceForOne;
        break;
        case "summer":
            priceForOne = 45.00;
            price = (countPeople * priceForOne) * 0.85;
            break;
            case "autumn":
                priceForOne = 49.50;
                price = countPeople * priceForOne;
                break;
                case "winter":
                    priceForOne = 85.00;
                    price = (countPeople * priceForOne) * 1.08;
                    break;
        }
}


console.log(`${price.toFixed(2)} leva.`);
}


calc(["20",
"winter"])

