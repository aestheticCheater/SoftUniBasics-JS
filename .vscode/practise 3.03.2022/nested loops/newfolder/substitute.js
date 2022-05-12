function substitute(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);
    let n4 = Number(input[3]);

    let count = 0;

    for (let i = n1; i <= 8; i++) {
        for (let j = 9; j >= n2; j -= 2) {
            for (let k = n3; k <= 8; k++) {
                for (let m = 9; m >= n4; m--) {
                  
                    if(count < 6){

                    if (i % 2 === 0 && k % 2 === 0 && j % 2 !== 0 && m % 2 !== 0){
                        if(i !== k || j !== m){
                        console.log(`${i}${j} - ${k} ${m}`);
                    count++;
                    }
                    else{ 
                        console.log("Cannot change the same player.");
                    }
                    }
                 
                                  }



                }
            }
        }
    }

}
substitute(["7",
"6",
"8",
"5"])
