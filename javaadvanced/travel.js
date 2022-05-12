function travelfree(input) {
let budget = Number(input[0]);
let season = input[1];
let price = 0;
let destination;
let restplace;

if (budget <= 100) {
    destination = "Bulgaria";
    switch(season) {
case "summer":
    price = budget * 0.30;
    break;
case "winter":
    price = budget * 0.70;
    break;
    }

}

if (budget > 100 && budget <= 1000) {
    destination = "Balkans";
    switch(season) {
        case "summer":
            price = budget * 0.40;
            break;
            case "winter":
                price = budget * 0.80;
                break;
    }
}

if (budget > 1000) {
    destination = "Europe";
    switch(season) {
    case "summer":
    case "winter":
        price = budget * 0.90;
break;
}
}

if (destination === "Bulgaria" || destination === "Balkans")
{
    switch(season) {
        case "summer":
            restplace = "Camp";
            break;
        case "winter":
            restplace = "Hotel";
            break;
    }
}
else if (destination === "Europe")
{
    switch(season) {
        case "summer":
            case "winter":
                restplace = "Hotel";
                break;
    }
}

console.log(`Somewhere in ${destination}`);
console.log(`${restplace} - ${price.toFixed(2)}`);

}

travelfree(["678.53", "winter"])