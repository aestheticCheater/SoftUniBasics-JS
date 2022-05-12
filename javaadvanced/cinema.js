function cinema(input) {
let type = input[0];
let rows = Number(input[1]);
let columns = Number(input[2]);

let incomes = 0;

if(type == "Premiere") {
  incomes = rows * columns * 12.0;
}
else if(type == "Normal") {
  incomes = rows * columns * 7.50;
}
else if(type == "Discount") {
  incomes = rows * columns * 5.00;
}

console.log(`${incomes.toFixed(2)} leva`);
}

cinema(["Premiere",
"10",
"12"])


