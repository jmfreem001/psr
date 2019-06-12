
let pScore = document.getElementById("playScore");
let oScore = document.getElementById("oppScore");
let goal = document.getElementById("goal").value;
let compWins = 0;
let playWins = 0;
let ties = 0;
let roundsPlayed = 0
let active = false;

// event handlers
const choices = document.querySelectorAll(".choice");

const scores = document.querySelectorAll(".score");
scores.forEach(score => score.addEventListener("transitionend", (e) => {
    score.classList.remove("scored");
}));

const button = document.getElementById("newGame");
button.addEventListener("click", newGame);


function getChoice(e){
    //Get input from user if game is active
    if (active === false){
        return;
    }

    // Play a round
    let playChoice = e.target.innerHTML;
    let compChoice = computerChoice();
    let result = playRound(playChoice, compChoice)
    
    // Display results
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
    // End the game if score goal is reached. 
    if (playWins === goal){
        active = false;
        document.getElementById("info").textContent = "You Win!"
    }
    else if (compWins === goal){
        active = false;
        document.getElementById("info").textContent = "You Lose!"
    }
    // remove button listener if a winner has been determined
    if (!active){
        choices.forEach(choice => choice.removeEventListener("click", getChoice));
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


function newGame(){
    // Start a new game.
    document.getElementById("info").textContent = "Paper, Scissors, or Rock?";
    compWins = 0;
    playWins = 0;
    ties = 0;
    roundsPlayed = 0
    
    goal = document.getElementById("goal").value;
    goal = Number(goal);
    active = true;

    pScore.textContent = playWins;
    oScore.textContent = compWins;

    choices.forEach(choice => choice.addEventListener("click", getChoice));
 
    let output = document.querySelector(".results");
    // Remove all children except the header
    while (output.children.length > 1){
        output.removeChild(output.children[1]);
    }
}
 
function randInt(min, max){
    // Generate a random integer.
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}