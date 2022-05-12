function football(input){
let tshirts = Number(input[0]);
let sumForWin = Number(input[1]);






let shorts = 0.75 * tshirts;
let socks = 0.20 * shorts;
let trainers = 2 * (shorts + tshirts);
let discount = 0.15 * (tshirts + shorts + socks + trainers);

let sum = (tshirts + shorts + socks + trainers) - discount ;

if(sum >= sumForWin){
    console.log("Yes, he will earn the world-cup replica ball!");
    console.log(`His sum is ${sum.toFixed(2)} lv`);
}else{
    console.log("No, he will not earn the world-cup replica ball.");
    console.log(`He needs ${Math.abs((sumForWin - sum)).toFixed(2)} lv. more.`);
}

}
football(["55","310"])