
function computerPlay(){
    let options = ['ROCK', 'PAPER', 'SCISSORS'];
    let random = Math.floor(Math.random() * options.length);
    return options[random];
}
function playRound(){
    let userChoice = document.getElementById('choiceField').value;
    let computerChoice = computerPlay();
    console.log(userChoice)
    console.log(computerChoice)
    if (userChoice.toUpperCase() == 'ROCK' || userChoice.toUpperCase() == 'PAPER' || userChoice.toUpperCase() == 'SCISSORS' ){
        if (userChoice.toUpperCase() == computerChoice){
            document.getElementById("results").innerHTML = 'TIE!';
        } else if (userChoice.toUpperCase() == 'ROCK' && computerChoice == 'PAPER'){
            document.getElementById("results").innerHTML = 'YOU LOSE!';
        } else if (userChoice.toUpperCase() == 'ROCK' && computerChoice == 'SCISSORS'){
            document.getElementById("results").innerHTML = 'YOU WIN!';  
        } else if (userChoice.toUpperCase() == 'PAPER' && computerChoice == 'SCISSORS'){
            document.getElementById("results").innerHTML = 'YOU LOSE!';
        } else if (userChoice.toUpperCase() == 'PAPER' && computerChoice == 'ROCK'){
            document.getElementById("results").innerHTML = 'YOU WIN!';       
        } else if (userChoice.toUpperCase() == 'SCISSORS' && computerChoice == 'ROCK'){
            document.getElementById("results").innerHTML = 'YOU LOSE!';
        } else if (userChoice.toUpperCase() == 'SCISSORS' && computerChoice == 'PAPER'){
            document.getElementById("results").innerHTML = 'YOU WIN!';
        } 
    }else{
        document.getElementById("results").innerHTML = 'Invalid input!';
    }
}
