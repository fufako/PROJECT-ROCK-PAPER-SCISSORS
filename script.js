
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
            return 0
        } else if (userChoice.toUpperCase() == 'ROCK' && computerChoice == 'PAPER'){
            document.getElementById("results").innerHTML = 'YOU LOSE!';
            return -1
        } else if (userChoice.toUpperCase() == 'ROCK' && computerChoice == 'SCISSORS'){
            document.getElementById("results").innerHTML = 'YOU WIN!';  
            return 1
        } else if (userChoice.toUpperCase() == 'PAPER' && computerChoice == 'SCISSORS'){
            document.getElementById("results").innerHTML = 'YOU LOSE!';
            return 0
        } else if (userChoice.toUpperCase() == 'PAPER' && computerChoice == 'ROCK'){
            document.getElementById("results").innerHTML = 'YOU WIN!';     
            return 1  
        } else if (userChoice.toUpperCase() == 'SCISSORS' && computerChoice == 'ROCK'){
            document.getElementById("results").innerHTML = 'YOU LOSE!';
            return 0
        } else if (userChoice.toUpperCase() == 'SCISSORS' && computerChoice == 'PAPER'){
            document.getElementById("results").innerHTML = 'YOU WIN!';
            return 1
        } 
    }else{
        document.getElementById("results").innerHTML = 'Invalid input!';
    }
}

let pcWins = 0;
let draws = 0;
let myWins = 0;
function gameScore(){
    let result = playRound()
    if (result == 1) {
        myWins++;
        document.getElementById("myWins").innerHTML = myWins;
        return
      } else if (result == 0) {
        draws++;
        document.getElementById('draws').innerHTML = draws;
        return
      } else {
        pcWins++;
        document.getElementById("pcWins").innerHTML = pcWins;
        return
      }
      
      
      
    
}
