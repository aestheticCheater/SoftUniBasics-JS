function library(input){
let bookSearch = input[0]; // Любимата книга, която търся
let i = 1; // брояч, стартиращ от едно, защото 0 вече е заето от любимата книга
let bookIsFound = false; // булев флаг за проверка на условие

let bookFound = input[i]; // Добавените заглавия на книги са част от брояча




while(bookFound !== "No More Books"){  // Докато добавените заглавия не са равни на No More Books
   
   if(bookFound === bookSearch){ // Ако Добавеното заглавие е същото като Любимата книга
       bookIsFound = true; // Булевия флаг връща тру и цикъла приключва
       break; 
   }
i++; // брояч 
bookFound = input[i]; 
}
if(bookIsFound === false){
    console.log("The book you search is not here!");
    console.log(`You checked ${i - 1} books.`);
}
else{
    console.log(`You checked ${i - 1} books and found it.`);  
}

}
library(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])

