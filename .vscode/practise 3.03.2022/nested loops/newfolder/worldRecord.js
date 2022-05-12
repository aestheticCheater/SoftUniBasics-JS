function worldRecord(input){
    let country = input[0];
    let instrument = input[1];
    let hardness = 0;
    let execution = 0;
    const max = 20;

    if(country === "Russia"){
   switch(instrument){
       case "ribbon":
       hardness = 9.100;
       execution = 9.400;
       break;
       case "hoop":
           hardness = 9.300;
           execution = 9.800;
           break;
           case "rope":
               hardness = 9.600;
               execution = 9.000;
               break;
   }     

    }

    else if(country === "Bulgaria"){
        switch(instrument){
            case "ribbon":
            hardness = 9.600;
            execution = 9.400;
            break;
            case "hoop":
                hardness = 9.550;
                execution = 9.750;
                break;
                case "rope":
                    hardness = 9.500;
                    execution = 9.400;
                    break;
        }     


    }
    else if(country === "Italy"){
        switch(instrument){
            case "ribbon":
            hardness = 9.200;
            execution = 9.500;
            break;
            case "hoop":
                hardness = 9.450;
                execution = 9.350;
                break;
                case "rope":
                    hardness = 9.700;
                    execution = 9.150;
                    break;
        }     

    }
    let total = (hardness + execution).toFixed(3);
    console.log(`The team of ${country} get ${total} on ${instrument}.`);
    

    let diff =  max - total;
    let percentage = (diff / max) * 100;
    console.log(`${percentage.toFixed(2)}%`)

}
worldRecord(["Bulgaria",
"ribbon"])
