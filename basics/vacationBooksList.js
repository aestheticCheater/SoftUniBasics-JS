function vacationBooksList(input) {
    let pageCount = Number(input[0]);
    let pageForOneHour = Number(input[1]);
    let day = Number(input[2]);
    let totalTime = pageCount / pageForOneHour;
    let needTime = totalTime / day;
    console.log(needTime);
}

vacationBooksList(["432", "15", "4"])