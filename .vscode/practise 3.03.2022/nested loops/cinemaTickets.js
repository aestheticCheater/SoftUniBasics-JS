function cinema(input){
let index = 0;
let inputLine = input[index];
let countStandartTickets = 0;
let countKidsTickets = 0;
let countStudentTickets = 0;

while(inputLine !== "Finish"){
    let movieName = inputLine;
    index++;
    let allTickets = Number(input[index]);
    let freeSpaceInTheCinema = allTickets;
    index++;
    let ticketType = input[index];
    while(ticketType !== "End"){
        switch(ticketType){
            case "standard":
                countStandartTickets++
                break;
                case "kid":
                    countKidsTickets++;
                    break;
                    case "student":
                        countStudentTickets++;
                        break;
        }
        freeSpaceInTheCinema--;
        if(freeSpaceInTheCinema === 0){
            break;
        }
        index++;
        ticketType = input[index];
    }
    let boughtTickets = allTickets - freeSpaceInTheCinema;
    let percentageFull = boughtTickets / allTickets * 100;
    console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
    index++;
    inputLine = input[index];
}
let allBoughtTickets = countKidsTickets + countStandartTickets + countStudentTickets;
console.log(`Total tickets: ${allBoughtTickets}`);
console.log(`${(countStudentTickets / allBoughtTickets * 100).toFixed(2)}% student tickets.`)
console.log(`${(countStandartTickets / allBoughtTickets * 100).toFixed(2)}% standard tickets.`)
console.log(`${(countKidsTickets / allBoughtTickets * 100).toFixed(2)}% kids tickets.`)
}
cinema(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
