function bday(input){
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let pricePerCount = Number(input[2]);
    let money = 0;
    let toyCount = 0;
    let tempMoney = 10;

    for(let i = 1; i <= age; i++){ 
        if(i % 2 === 0){ // за всеки четен рожден ден
        money += tempMoney; // парите се увеличават с tempMoney
        tempMoney += 10; // временните пари се увеличават с по 10 лева
        money -= 1;

        }
        else{
            toyCount++;
        }
    }
    money += toyCount * pricePerCount;
    let diff = Math.abs(money - washingMachinePrice);
    if(money >= washingMachinePrice){
        console.log(`Yes! ${diff.toFixed(2)}`);
    }
    else{
        console.log(`No! ${diff.toFixed(2)}`);
    }
    }

bday(["21",
"1570.98",
"3"])

