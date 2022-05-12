function projectCreation(input){
    let architectName = input[0];
    let projectCount = input[1];
  let hours = projectCount * 3;
  console.log(`The architect ${architectName} will need ${hours} hours to complete ${projectCount} project/s.`)

}
projectCreation(["George", "4"]);