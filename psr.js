function game(n){
    // Play a n rounds of psr.
    let compWins = 0;
    let playWins = 0;
    let ties = 0;
    for (let i = 0; i < n; i++){
        let p_choice = playerChoice()
        let c_choice = computerChoice()

        let result = playRound(p_choice, c_choice);
        console.log(result)
        if (result === "Tie."){
            ties += 1;
        }else if (result === "You Win."){
            playWins += 1;
        }else{
            compWins += 1;
        }
    }
    if (compWins === playWins){
        console.log("It was a draw.")
    }else if (compWins > playWins){
        console.log(`"Your Opponent wins with a score of ${compWins} to ${playWins}."`)
    }else{
        console.log(`"You win with a score of ${playWins} to ${compWins}."`)
    }
}


function computerChoice(){
    // randomly select a choice for the computer. 
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
   // Prompt user for choice.
    let p_choice;
    let choices = ["Paper", "Scissors", "Rock"]
    // Check that item is a proper choice by ensuring it has an index ( if not it will have an index of -1)
   do{
       p_choice = prompt("Paper, Scissors, or Rock?")
       p_choice = initCaps(p_choice);
   }while(choices.indexOf(p_choice) < 0)

   return p_choice;
}

function playRound(playChoice, compChoice){
    // Simulate a round of Paper Scissors Rock.
    console.log(`"You played ${playChoice}"`)
    console.log(`"Opponent played ${compChoice}"`)
    //TODO
    if (playChoice === compChoice){
        return "Tie."
    }else if (playChoice === "Paper"){
        return(compChoice === "Rock") ? "You Win.":"You Lose.";
    }else if (playChoice === "Scissors"){
        return (compChoice === "Paper") ? "You Win.":"You Lose.";
    }else{
        return (compChoice ===  "Scissors") ? "You Win.":"You Lose." 
    }

}

function randInt(min, max){
    // Generate a random integer.
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function initCaps(string){
    let new_string = string.toLowerCase();
    let second = new_string.substring(1);
    let first = new_string.charAt(0);
    first = first.toUpperCase()
    value = first.concat(second);
    return value;
 }   


 game(5)