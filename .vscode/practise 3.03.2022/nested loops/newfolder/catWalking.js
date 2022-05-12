function cats(input){

    let minutes = Number(input[0]);
    let countOfWalking = Number(input[1]);
    let calories = Number(input[2]);
    let dayWalking = 0;
   dayWalking = minutes * countOfWalking;

    let burnedCaloriesForWalking =(5 * dayWalking);
    let halfdayCalories = calories / 2;

    if(burnedCaloriesForWalking >= halfdayCalories){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCaloriesForWalking}.`);
    }
    else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCaloriesForWalking}.`)
    }

}
cats(["15",
"2",
"500"])

