let option = ["rock", "paper", "scissors"];

function computerPlay(option) {
    let random = Math.floor(Math.random() * 3);
    let compPlay = option[random];
    console.log(`Computer played ${compPlay}`);
    return compPlay;
}

function humanPlay(option) {
    let humPlay = "";
    while (!option.includes(humPlay)) {
        humPlay = prompt("Choose your play! (Rock, paper or scissors").toLowerCase();
    }
    console.log(`Human played ${humPlay}`);
    return humPlay;
}

function playRound(computerPlay, humanPlay, option) {
    let compPlay = computerPlay(option);
    let humPlay = humanPlay(option);
    let winner = "";
    let compIndex = option.indexOf(compPlay);
    let humIndex = option.indexOf(humPlay);
    let diff = Math.abs(compIndex - humIndex);
    if (diff == 1) {
        winner = compIndex > humIndex ? "Computer" : "Human";
    }
    else if (diff == 2) {
        winner = compIndex == 0 ? "Computer" : "Human";
    }
    else {
        winner = "noone";
    }
    console.log(`Winner is ${winner}!`);
    return winner;
}

playRound(computerPlay, humanPlay, option);