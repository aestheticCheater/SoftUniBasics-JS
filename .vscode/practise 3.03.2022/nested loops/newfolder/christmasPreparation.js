function christmas(input){
let paperUnit = 5.80;
let materialUnit = 7.20;
let gluePerLiter = 1.20;

let countPaper = Number(input[0]);
let countMaterial = Number(input[1]);
let litersglue = Number(input[2]);
let percentDiscount = Number(input[3]) / 100;

// finalprice = ?

let finalPrice = countPaper * paperUnit + countMaterial * materialUnit + gluePerLiter * litersglue - (percentDiscount * (countPaper * paperUnit + countMaterial * materialUnit + gluePerLiter * litersglue));
console.log(finalPrice.toFixed(3))

}

christmas(["7",
"8",
"0.5",
"45"])

