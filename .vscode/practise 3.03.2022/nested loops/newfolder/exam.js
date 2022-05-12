function exam(input){
let totalStudents = Number(input[0]);
let index = 1;
let marks = Number(input[index]);
let group4 = 0;
let group3 = 0;
let group2 = 0;
let group1 = 0;
let total = 0;
for(let i = 0; i < totalStudents; i++){
marks = Number(input[index]);
index++;
total += marks;
if(marks < 3){
group4++;
}
else if(marks >= 3 && marks <= 3.99){
    group3++;
}
else if(marks >= 4 && marks <= 4.99){
    group2++;
}
else if(marks >= 5.00){
    group1++;
}

}
let percentage1 = (group1 / totalStudents) * 100;
let percentage2 = (group2 / totalStudents) * 100;
let percentage3 = (group3 / totalStudents) * 100;
let percentage4 = (group4 / totalStudents) * 100;
let avg = total / totalStudents;
console.log(`Top students: ${percentage1.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${percentage2.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${percentage3.toFixed(2)}%`);
console.log(`Fail: ${percentage4.toFixed(2)}%`);
console.log(`Average: ${avg.toFixed(2)}`);


}
exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
