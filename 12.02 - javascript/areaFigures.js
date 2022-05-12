function area(input) {
    let figure = input[0];
    if (figure === "square") {
        let a = Number(input[1]);
        let areaSquare = a * a;
        console.log(areaSquare.toFixed(3));
    }
    else if (figure === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let areaSquare = a * b;
        console.log(areaSquare.toFixed(3));
    }
    else if (figure === "circle") {
        let r = Number(input[1]);
        areaSquare = Math.pow(r, 2) * Math.PI;
        console.log(areaSquare.toFixed(3));
    }
    else if (figure === "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        areaSquare = (a * h) / 2;
        console.log(areaSquare.toFixed(3));
    }

}

area(["triangle", 4.5, 20])