function sum(input){
    index = 0;
    let startNum = Number(input[index]);
    index++;

    let sum = 0;



    while(sum < startNum){
        let nums = Number(input[index]);
    index++;
    sum += nums;
    

    }
    console.log(sum);
}

sum(["100",
"10",
"20",
"30",
"40"])
 