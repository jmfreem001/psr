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
    roundsPlayed += 1
    let output = document.querySelector(".results");
    let yourPlay = document.createElement("p");
    let theirPlay = document.createElement("p");
    yourPlay.textContent= `"Round ${roundsPlayed}: You played ${playChoice}"`
    theirPlay.textContent = `"Opponent played ${compChoice}"`

    output.appendChild(yourPlay);
    output.appendChild(theirPlay);

    console.log(`"You played ${playChoice}"`)
    console.log(`"Opponent played ${compChoice}"`)

    if (playChoice === compChoice){
        return "Tie."
    }else if (playChoice === "Paper"){
        return(compChoice === "Rock") ? "Win":"Lose";
    }else if (playChoice === "Scissors"){
        return (compChoice === "Paper") ? "Win":"Lose";
    }else{
        return (compChoice ===  "Scissors") ? "Win":"Lose"; 
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
 


 let pScore = document.getElementById("playScore");
 let oScore = document.getElementById("oppScore");
 let goal = document.getElementById("goal").value;
 let compWins = 0;
 let playWins = 0;
 let ties = 0;
 let roundsPlayed = 0
 let active = false;

function newGame(){
 document.getElementById("info").textContent = "Good Luck!"
 compWins = 0;
 playWins = 0;
 ties = 0;
 roundsPlayed = 0
 goal = Number(goal);
 active = true;

 pScore.textContent = playWins;
 oScore.textContent = compWins;
 // TODO Delete old Element. 
 choices.forEach(choice => choice.addEventListener("click", getChoice));
}
 
function getChoice(e){
    if (active === false){
        return;
    }
    let playChoice = e.target.innerHTML;
    let compChoice = computerChoice();
    let result = playRound(playChoice, compChoice)
    if (result === "Win"){
        playWins += 1;
        pScore.textContent = playWins;
        pScore.classList.add("scored")

    }else if (result=== "Lose"){
        compWins += 1;
        oScore.textContent = compWins;
        oScore.classList.add("scored")

    }else{
        ties +=1;
    }

    if (playWins === goal){
        console.log("Player Wins");
        active = false;
        document.getElementById("info").textContent = "You Win!"
    }
    else if (compWins === goal){
        console.log("Opponent Wins")
        active = false;
        document.getElementById("info").textContent = "You Lose!"
    }
    if (!active){
        choices.forEach(choice => choice.removeEventListener("click", getChoice));
    }
}




// event handlers
const choices = document.querySelectorAll(".choice");

const scores = document.querySelectorAll(".score");
scores.forEach(score => score.addEventListener("transitionend", (e) => {
    score.classList.remove("scored");
}));

const button = document.getElementById("newGame");
button.addEventListener("click", newGame);