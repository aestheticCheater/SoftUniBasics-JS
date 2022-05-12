function repainting(input){
    let nylon = Number(input[0]);
    let paint = input[1];
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let priceForNylon = (nylon + 2) * 1.5;
    let priceForPaint = (paint * 1.10) * 14.50;
    let priceThinner = thinner * 5;

    let totalStuffPrice = priceThinner + priceForNylon + priceForPaint + 0.40;
    let workForOneHour = totalStuffPrice * 0.30;
    let totalWork = workForOneHour * hours;
    let total = totalStuffPrice + totalWork;
    console.log(total);
}

repainting(["10", "11", "4", "8"])