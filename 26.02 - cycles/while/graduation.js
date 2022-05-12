function graduation(input) {
    index = 0;
    let studentName = input[index];
    index++;
    let failedCounter = 0;
    let sum = 0; // сбор от оценките
    let avg = 0;
    let i = 1; //начална стойност
    isExcluded = false; // boolean flag за проверка на условие
    while (i <= 12) {   // чете класовете до 12ти
        yearMarks = Number(input[index]); 
        index++;
       
    
     if(yearMarks < 4.00){
         failedCounter++; // инкрементиране на броя провали
         if(failedCounter > 1){ // Ако е скъсан повече от един път
            isExcluded = true; // Ако е изключен, отпечатай..
             console.log(`${studentName} has been excluded at ${i} grade`); // в кой клас е бил изключен
             break;
         }
         continue; // пропуска инкрементацията към следващия клас, все едно е бил скъсан и повтаря същия клас
     }
    
     sum += yearMarks; // Сумата от годишните оценки
     i++; //инкрементация на класовете
     
    }
    if(!isExcluded){ // Ако не е изключен, отпечатай..
    avg = sum / 12; // Средна оценка за всички класове
console.log(`${studentName} graduated. Average grade: ${avg.toFixed(2)}`);}
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])





