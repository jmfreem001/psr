function computerPlay(){
    let play = randInt(1,4);
    let choice;

    switch(play){
        case 1: choice = "Rock";
        break;
        case 2:  choice = "Paper";
        break;
        case 3:  choice = "Scissors";
        break;
    }
    return choice;
}

function playerChoice(){
    
}

function playRound(){

}

function randInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(computerPlay())