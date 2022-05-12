function bday(input){
let rent = Number(input[0]);
let cake = 0;
let drink = 0;
let animator = 0;
let budget = 0;

cake = 0.20 * rent;
drink = (0.55 * cake);
animator = (1/3) * rent;

budget = cake + drink + animator + rent;


console.log(budget.toFixed(1));


}
bday(["3720"])