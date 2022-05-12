function library(input){
/* Ани отива до родния си град след много дълъг период извън страната. Прибирайки се вкъщи тя вижда старата библиотека на баба си
 и си спомня за любимата си книга. Помогнете на Ани, като напишете функция в която тя въвежда търсената от нея книга(текст). 
 Докато Ани не намери любимата си книга или не провери всички в библиотеката, 
 програмата трябва да чете всеки път на нов ред името на всяка следваща книга (текст). 
 Книгите в библиотеката са свършили щом получите текст "No More Books".
•	Ако не открие книгата да се отпечата на два реда: 
o	"The book you search is not here!"
o	"You checked {брой} books."
•	Ако открие книгата си се отпечатва един ред:
o	"You checked {брой} books and found it."  
*/
index = 0;
let favourite = input[index];
index++;
let command = input[index];

let isBookIsFound = false;

while(command !== "NoMoreBooks"){


if(command === favourite){
  isBookIsFound = true;
  break;
}

command = input[index];
index++;}
if(isBookIsFound === false){
    console.log("The book you search is not here!");
    console.log(`You checked ${index - 1} books.`);
}
else{
    console.log(`You checked ${index - 1} books and found it.`);
}
}

library(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])


