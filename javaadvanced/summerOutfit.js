function outfit(input) {
    let degree = Number(input[0]);
    let text = input[1];
    let outfits;
    let shoes;

    if (degree >= 10 && degree <= 18) {
        if (text == "Morning") {
            outfits = "Sweatshirt";
            shoes = "Sneakers"
        }
        else if (text == "Afternoon") {
            outfits = "Shirt";
            shoes = "Moccasins";
        }
        else if (text == "Evening") {
            outfits = "Shirt";
            shoes = "Moccasins";
        }
    }

    else if (degree > 18 && degree <= 24) {
        if (text == "Morning") {
            outfits = "Shirt";
            shoes = "Moccasins"
        }
        else if (text == "Afternoon") {
            outfits = "T-Shirt";
            shoes = "Sandals";
        }
        else if (text == "Evening") {
            outfits = "Shirt";
            shoes = "Moccasins";
        }
    }

    else if (degree >= 25) {
        if (text == "Morning") {
            outfits = "T-Shirt";
            shoes = "Sandals"
        }
        else if (text == "Afternoon") {
            outfits = "Swim Suit";
            shoes = "Barefoot";
        }
        else if (text == "Evening") {
            outfits = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degree} degrees, get your ${outfits} and ${shoes}.`);
}
outfit(["22",
"Afternoon"])



