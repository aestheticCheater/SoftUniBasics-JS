function garden(input){
let type = input[0];
let count = Number(input[1]);
let budget = Number(input[2]);
let total = 0;

if(type === "Roses"){
    let pricePer1 = 5;
    total = count * pricePer1;
    if(count > 80){
        total *= 0.90;
    }
}
else if(type === "Dahlias"){
    let pricePer1 = 3.80;
    total = count * pricePer1;
    if(count > 90){
        total *= 0.85;
    }
}
else if(type === "Tulips"){
    let pricePer1 = 2.80;
    total = count * pricePer1;
    if(count > 80){
        total *= 0.85;
    }
}
else if(type === "Narcissus"){
    let pricePer1 = 3;
    total = count * pricePer1;
    if(count < 120){
        total *= 1.15;
    }
}
else if(type === "Gladiolus"){
    let pricePer1 = 2.50;
    total = count * pricePer1;
    if(count < 80){
        total *= 1.20;
    }
}

if(total > budget){
    console.log(`Not enough money, you need ${(total - budget).toFixed(2)} leva more.`);
}
else{
    console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - total).toFixed(2)} leva left.`);
}


}
garden(["Tulips",
"88",
"260"])
