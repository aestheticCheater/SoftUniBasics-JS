function sum(input){
    let txtnum = "" + input[0];
    let sum = 0;
    for(let i = 0; i < txtnum.length; i++){
        let num = Number (txtnum[i]);
        sum +=num;
 
    }
    console.log(`The sum of the digits is:${sum}`);
}

sum(["12345"])