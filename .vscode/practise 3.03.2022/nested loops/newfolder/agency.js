function agency(input){
let name = input[0];
let countAdultTickets = Number(input[1]);  
let countChildrenTickets = Number(input[2]);
let pricePerAdultTicket = Number(input[3]);
let taxService = Number(input[4]);
 
let pricePerChildrenTicket = 0.30 * pricePerAdultTicket + taxService;

let totalPrice = (countAdultTickets * (pricePerAdultTicket + taxService)) + (countChildrenTickets * pricePerChildrenTicket);
let incomeAgency = 0.20 * totalPrice;

console.log(`The profit of your agency from ${name} tickets is ${incomeAgency.toFixed(2)} lv.`);

}

agency(["Ryanair",
"60",
"23",
"158.96",
"39.12"])

