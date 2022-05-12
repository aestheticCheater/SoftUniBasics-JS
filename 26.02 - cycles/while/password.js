function pass(input){
    let index = 0;
    let userName = input[index];
    index++;
    let password = input[index];
    index++;
    let tempPass = input[index];
    index++;

    while(password !== tempPass){
     tempPass = input[index];
    index++;

    }

    console.log(`Welcome ${userName}!`)
} pass(["Gosho",
"secret",
"secret"])

