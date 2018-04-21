// create info elements
let div = document.querySelector("div#info");
let humDiv = document.createElement("p");
let compDiv = document.createElement("p");
let winDiv = document.createElement("p");
let scoreDiv = document.createElement("p");
humDiv.id = "human";
compDiv.id = "computer";
winDiv.id = "winner";
scoreDiv.id = "score";
div.appendChild(humDiv);
div.appendChild(compDiv);
div.appendChild(winDiv);
div.appendChild(scoreDiv);

// set up the game
let option = ["rock", "paper", "scissors", 5];
let humScore = 0;
let compScore = 0;

// human play
document.body.querySelectorAll("button").forEach((btn) => btn.addEventListener("click", playRound));

function playRound(e) {
    // computer's turn
    let compPlay = computerPlay();
    let compIndex = option.indexOf(compPlay);
    compDiv.textContent = "Computer played " + compPlay;
    
    // player's turn
    let humPlay = e.target.id;
    let humIndex = option.indexOf(humPlay);
    humDiv.textContent = "Human played " + humPlay;

    // decide the winner
    let diff = Math.abs(humIndex - compIndex);
    if (diff == 0) winner = "No one";
    else if (diff == 1) winner = humIndex > compIndex ? "Human" : "Computer";
    else winner = humIndex == 0 ? "Human" : "Computer";

    winDiv.textContent = winner + " wins!";
    game(winner);
}

function game(winner) {
    // award point and keep score
    if (winner == "Human") humScore++;
    else if (winner == "Computer") compScore++;
    scoreDiv.textContent = "Human: " + humScore + " : " + compScore + " Computer";
    
    // check if somebody won
    if (humScore == option[3] || compScore == option[3]) {
        let winnerDiv = document.createElement("p");
        winnerDiv.textContent = winner + " has won the game!";
        div.appendChild(winnerDiv);
        document.body.querySelectorAll("button").forEach((btn) => btn.style.display = "none");


        // start over
        let strtOver = document.createElement("button");
        strtOver.textContent = "START OVER";
        div.appendChild(strtOver);
        strtOver.addEventListener("click", (e) => {
            humScore = 0;
            compScore = 0;
            humDiv.textContent = "";
            compDiv.textContent = "";
            winDiv.textContent = "";
            scoreDiv.textContent = "";
            winnerDiv.textContent = "";
            document.body.querySelectorAll("button").forEach((btn) => btn.removeAttribute("style"));
            div.removeChild(strtOver);            
        });
    }
}

function computerPlay() {
    let compPlay = Math.floor(Math.random() * 3);
    return option[compPlay];
}