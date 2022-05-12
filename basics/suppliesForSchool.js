function suppliesForSchool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let detragent = Number(input[2]);
    let percentage = Number(input[3]);
    let sum = pens * 5.80 + markers * 7.20 + detragent * 1.2;
    let discount = (percentage / 100) * sum;
    let totalSum = pens * 5.80 + markers * 7.20 + detragent * 1.2 - discount;
    console.log(totalSum);
}

suppliesForSchool(["2", "3", "4", "25"])