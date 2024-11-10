function countBs(text) {
    let numberBs = 0;
    for (let i = 0; i < text.length; i++){
        if (text[i] === "B"){
            numberBs++;
        }
    }
    return numberBs;       
}

function countChar(text, char){
    let numberChar = 0;
    for (let i = 0; i < text.length; i++){
        if (text[i] === char){
            numberChar++;
        }
    }
    return numberChar; 

}

console.log(countBs("BOB"))

console.log(countChar("kakkerlak", "k"))


