let size = 8
for (let i = 0; i < size; i++){
    let board = ""
    for (let j = 0; j < size; j++){
        if((i + j) % 2 == 0){
            board += "#"
        } else {
            board += " "
        } 
    }
    console.log(board);
}

