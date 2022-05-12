function globa(input){
let index = 0;
let openTabs = Number(input[index]);
index++;
let salary = Number(input[index]);
index++;

isHaveSalary = true;
for(let i = 0; i < openTabs; i++){
let currentTab = input[index];
index++;


if(currentTab === "Facebook"){
    salary -= 150;

}
else if(currentTab === "Instagram"){
    salary -= 100;
}

else if(currentTab === "Reddit"){
    salary -= 50;
}


if(salary <= 0){
    console.log(`You have lost your salary.`);
    isHaveSalary = false;
     break;
}
}
if(isHaveSalary){
    console.log(salary);
}
}

globa(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
