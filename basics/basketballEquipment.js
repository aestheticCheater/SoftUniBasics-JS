function basketballEquipment(input){
    let yearTax = Number(input[0]);
    let sneakersPrice = 0.60 * yearTax;
    let equipPrice = 0.80 * sneakersPrice;
    let ballPrice = 0.25 * equipPrice;
    let accessoriesPrice = 0.20 * ballPrice;
    let totalSum = yearTax + sneakersPrice + equipPrice + ballPrice + accessoriesPrice;
console.log(totalSum);
}  
basketballEquipment(["365"]);