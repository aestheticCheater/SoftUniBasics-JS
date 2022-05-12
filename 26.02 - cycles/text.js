function text(input){
    let txt = input[0];
    for(let i = 0; i < txt.length; i++){
        let letter = txt[i]; // взимаме всеки символ по индекс i
        console.log(letter);
    }
}

text(["gay"])