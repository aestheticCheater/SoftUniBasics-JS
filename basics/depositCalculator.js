function depositCalculator(input){
 let depositAmmount = Number(input[0]);
 let term = Number(input[1]);
 let annualInterestRate = Number(input[2]);
 let annualInterestRateForOneYear = ((annualInterestRate / 100) * depositAmmount);
 let annualInterestRateForOneMonth = annualInterestRateForOneYear / 12;
 let sum = depositAmmount + (term * annualInterestRateForOneMonth);
 console.log(sum)

}
depositCalculator(["200","3", "5.7"])