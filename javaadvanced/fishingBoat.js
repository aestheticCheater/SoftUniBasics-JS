function fishingboat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = input[2];
    const proletPrice = 3000;
    const lqtoPrice = 4200;
    const esenPrice = 4200;
    const zimaPrice = 2600;
    let price = 0;
    let discount = 0;

    if (fisherCount <= 6) {
        switch (season) {
            case "Spring":
                price = proletPrice * 0.90;

                break;
            case "Summer":
                price = lqtoPrice * 0.90;

                break;
            case "Autumn":
                price = esenPrice * 0.90;

                break;
            case "Winter":
                price = zimaPrice * 0.90;
                break;
        }
    }
    if (fisherCount >= 7 && fisherCount <= 11) {
        switch (season) {
            case "Spring":
                price = proletPrice * 0.85;

                break;
            case "Summer":
                price = lqtoPrice * 0.85;

                break;
            case "Autumn":
                price = esenPrice * 0.85;

                break;
            case "Winter":
                price = zimaPrice * 0.85;
                break;
        }

    }
    if (fisherCount > 12) {
        switch (season) {
            case "Spring":
                price = proletPrice * 0.75;

                break;
            case "Summer":
                price = lqtoPrice * 0.75;

                break;
            case "Autumn":
                price = esenPrice * 0.75;

                break;
            case "Winter":
                price = zimaPrice * 0.75;
                break;
        }
    }

    if (fisherCount % 2 == 0) {
        switch (season) {
            case "Spring":
            case "Summer":
            case "Winter":
                discount = price * 0.05;
                price -= discount;
        }
    }


    moneyleft = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Yes! You have ${moneyleft.toFixed(2)} leva left.`);

    }
    if (budget < price) {
        console.log(`Not enough money! You need ${moneyleft.toFixed(2)} leva.`);
    }

}

fishingboat(["3000",
"Summer",
"11"])




