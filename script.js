/////variables/////

let computerChoice = "";
let playerChoice = "nothing";
let counter = 0;
let playerWins = 0;
let computerWins = 0;

const rockButton = document.querySelector(".rock");
const scissorsButton = document.querySelector(".scissors");
const paperButton = document.querySelector(".paper");
const playButton = document.querySelector(".play-button");

/////functions/////

const setRock = function() {
    document.getElementById("player-choice").innerHTML = "You choose rock!"
    document.getElementById("computer-choice").innerHTML = "";                       //clears up old text
    document.getElementById("win-or-lose-text").innerHTML = "";                      //clears up old text
    return playerChoice = "rock"
}
    
const setScissors = function() {
    document.getElementById("player-choice").innerHTML = "You choose scissors!"
    document.getElementById("computer-choice").innerHTML = "";                      //clears up old text
    document.getElementById("win-or-lose-text").innerHTML = "";                     //clears up old text
    return playerChoice = "scissors";
}
    
const setPaper = function() {
    document.getElementById("player-choice").innerHTML = "You choose paper!"
    document.getElementById("computer-choice").innerHTML = "";                      //clears up old text
    document.getElementById("win-or-lose-text").innerHTML = "";                     //clears up old text
    return playerChoice = "paper";
}

const setComputer = function() {                                                    //a function that generates a choice for computer
    let randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            return computerChoice = "rock";
    }   else if (randomNumber === 1) {
            return computerChoice = "paper";
    }   else {
            return computerChoice = "scissors";
    }
}    

function compare(playerChoice, computerChoice) {                                                                   //compare() is created here, called later!!
    document.getElementById("computer-choice").innerHTML = "Computer chooses " + computerChoice + "!"
    if (playerChoice === computerChoice) {
        console.log("draw");
        computerWins++;
        playerWins++;
        document.getElementById("win-or-lose-text").innerHTML = "Draw! A point for each!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        console.log("lose");
        computerWins++;
        document.getElementById("win-or-lose-text").innerHTML = "Damn! A point for the computer!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        console.log("win");
        playerWins++;
        document.getElementById("win-or-lose-text").innerHTML = "Nice! A point for you!";
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        console.log("lose");
        computerWins++;
        document.getElementById("win-or-lose-text").innerHTML = "Damn! A point for the computer!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        console.log("win");
        playerWins++;
        document.getElementById("win-or-lose-text").innerHTML = "Nice! A point for you!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        console.log("lose");
        computerWins++;
        document.getElementById("win-or-lose-text").innerHTML = "Damn! A point for the computer!";
    } else {
        console.log("win");
        playerWins++;
        document.getElementById("win-or-lose-text").innerHTML = "Nice! A point for you!";
    }
}

const playRound = function() {                                                                                      //playRound() is created here, called below

    if (playerChoice === "nothing") {
        document.getElementById("player-choice").innerHTML = "You didn't pick anything??? Hello???";
}   else if (playerWins <=4 && computerWins <=4 && playerChoice != "nothing")   {
        setComputer();
        compare(playerChoice, computerChoice);                                                                      //compare() is called here!
        counter++;
        document.getElementById("player-score").innerHTML = playerWins;
        document.getElementById("computer-score").innerHTML = computerWins;
}   else if (playerWins ===5 && computerWins <5) {
        document.getElementById("win-or-lose-text").innerHTML = "You are on 5! You are the winner!";
}   else if (computerWins ===5 && playerWins <5) {
        document.getElementById("win-or-lose-text").innerHTML = "Computer is on 5! Sorry but you lost!";
}   else {
        document.getElementById("win-or-lose-text").innerHTML = "Wow, 5 points each! An unlikely tie!";
}
}
    
rockButton.addEventListener('click', setRock);                                                                           //clicking sets playerChoice to "Rock"
scissorsButton.addEventListener('click', setScissors);                                                                   //clicking sets playerChoice to "Scissors"
paperButton.addEventListener('click', setPaper);                                                                         //clicking sets playerChoice to "Paper"
playButton.addEventListener('click', playRound);                                                                         //playRound() is called here!