    let caro = document.getElementById("carogame");
    let boardArray = [];
    let dataHTML = '';

    for (let i = 0; i < 5; i++){
    boardArray[i] = new Array(0,0,0,0,0);
}for (let i = 0; i <5; i++){
        dataHTML = dataHTML + "<br>"
    for (let j = 0; j < 5; j++){
        dataHTML += boardArray[i][j]+ ""
    }
    }