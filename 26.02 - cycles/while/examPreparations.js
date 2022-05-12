function preparation(input) {
    let countOfBadGrades = input[0];
    let index = 1;
    let command = input[index];
    let numberOfProblems = 0;
    let sumGrades = 0;
    let currNumOfBadGrades = 0;

    while (command !== "Enough") {
        numberOfProblems++;
        index++;
        let currentGrade = Number(input[index]);
        sumGrades += currentGrade;
        if (currentGrade <= 4) {
            currNumOfBadGrades++;

        }
        if (currNumOfBadGrades >= countOfBadGrades) {
            console.log(`You need a break, ${currNumOfBadGrades} poor grades.`);
            break;
        }
        index++;
        command = input[index];
    }
    if (command === "Enough") {
        let avgGrade = (sumGrades / numberOfProblems).toFixed(2);
        console.log(`Average score: ${avgGrade}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        index -= 2;
        command = input[index];
        console.log(`Last problem: ${command}`);
    }

}

preparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])

