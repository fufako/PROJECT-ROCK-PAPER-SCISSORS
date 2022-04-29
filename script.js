function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * options.length);
    return options[random];
}