function fishtank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentageUsedSpace = Number(input[3]) /100;
    let fishtankV = length * width * height;
    let vInLiters = fishtankV / 1000;
    let requiredLiters = vInLiters *(1 - percentageUsedSpace);

    console.log(requiredLiters);
}

fishtank(["85","75","47","17"]);