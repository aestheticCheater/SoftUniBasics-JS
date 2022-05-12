function sum(input) {
    let n = Number(input[0])
    let combination = 0;
    let isBreak = false;
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let mult = a * b * c * d;
                    if (sum === mult && n % 10 === 5) {
                        combination = combination + 1;
                        console.log(`${a}${b}${c}${d}`);
                        isBreak = true;
                        break;
                    }
                    else if (Math.floor(mult / sum) === 3 && n % 3 === 0) {
                        combination = combination + 1;
                        console.log(`${d}${c}${b}${a}`);
                        isBreak = true;
                        break;
                    }

                    if (isBreak) {
                        break;
                    }
                }

                if (isBreak) {
                    break;
                }
            }

            if (isBreak) {
                break;
            }
        }

        if (isBreak) {
            break;
        }


    }
    if (combination === 0) {
        console.log("Nothing found");
    }
}
sum(["123"])
