

//Напишете функция, която чете цяло число от масив и на всеки следващ ред цели числа, 
//докато тяхната сума стане по-голяма или равна на първоначалното число. 
//След приключване да се отпечата сумата на въведените числа.
function sum(input){
    let firstNum = Number(input[0]);
    index = 1 ;
    let num = Number(input[index]);
   let sum = 0;


    while(sum < firstNum){
       num = Number(input[index]);
        index++;
        sum += num;
    }
    console.log(sum)
}

sum(["100",
"10",
"20",
"30",
"40"])
