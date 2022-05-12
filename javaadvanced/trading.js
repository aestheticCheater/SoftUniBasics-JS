// Град	0 ≤ s ≤ 500	500 < s ≤ 1 000	1 000 < s ≤ 10 000	s > 10 000
//Sofia	5%	7%	8%	12%
//Varna	4.5%	7.5%	10%	13%
//Plovdiv	5.5%	8%	12%	14.5%



function trading(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commision;
    if (sales >= 0 && sales <= 500) {
        switch (city) {
            case "Sofia":
                commision = sales * 0.05;
                console.log(commision.toFixed(2));
                break;
            case "Varna":
                commision = sales * 0.045;
                console.log(commision.toFixed(2));
                break;
            case "Plovdiv":
                commision = sales * 0.055;
                console.log(commision.toFixed(2));
                break;
        }
    }

    else if (sales > 500 && sales <= 1000) {
        switch (city) {
            case "Sofia":
                commision = sales * 0.07;
                console.log(commision.toFixed(2));
                break;
            case "Varna":
                commision = sales * 0.075;
                console.log(commision.toFixed(2));
                break;
            case "Plovdiv":
                commision = sales * 0.08;
                console.log(commision.toFixed(2));
                break;
        }
    }

    else if (sales > 1000 && sales <= 10000) {
        switch (city) {
            case "Sofia":
                commision = sales * 0.08;
                console.log(commision.toFixed(2));
                break;
            case "Varna":
                commision = sales * 0.10;
                console.log(commision.toFixed(2));
                break;
            case "Plovdiv":
                commision = sales * 0.12;
                console.log(commision.toFixed(2));
                break;
        }
    }
    else if (sales > 10000) {
        switch (city) {
            case "Sofia":
                commision = sales * 0.12;
                console.log(commision.toFixed(2));
                break;
            case "Varna":
                commision = sales * 0.13;
                console.log(commision.toFixed(2));
                break;
            case "Plovdiv":
                commision = sales * 0.145;
                console.log(commision.toFixed(2));
                break;
        }


    }
    else { 
        console.log("error");
    }
    let value= (city == "Varna" || city == "Plovdiv" || city == "Sofia");
    if (!value) {
     console.log("error");
    }
    }
  
    



trading(["Kaspichan",
"-1000"])






