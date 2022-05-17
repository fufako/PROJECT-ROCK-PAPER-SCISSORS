const weakStrong = {
  rock: { weakTo: "paper", strongTo: "scissors" },
  paper: { weakTo: "scissors", strongTo: "rock" },
  scissors: { weakTo: "rock", strongTo: "paper" },
}
const weapons = ["rock", "paper", "scissors"]

document.querySelectorAll("#player-choices > img").forEach((element) => {
  element.addEventListener("click", (event) => {
    const choice = event.target.id
    const pcChoice = Math.floor(Math.random() * 3)
    playRound(choice, pcChoice)
    changeContent(choice, pcChoice)
  })
})
function playGame() {}

function playRound(choice, pcChoice) {
  const result = document.getElementById("round-result")
  let playerScore = 0
  let pcScore = 0
  if (weakStrong[choice].strongTo === weapons[pcChoice]) {
    playerScore += 1
    updateScoreBoard("player")
    result.textContent = "You win!"
  } else if (weakStrong[choice].weakTo === weapons[pcChoice]) {
    pcScore += 1
    updateScoreBoard("pc")
    result.textContent = "You lose!"
  } else {
    console.log("tie")
    result.textContent = "It's a tie!"
  }
}
function changeContent(choice, pcChoice) {
  const playerPick = document.getElementById("player-info")
  const playerWeapon = document.getElementById("player-choices")
  const pcPick = document.getElementById("pc-info")
  const pcWeapon = document.getElementById("pc-choices")
  playerWeapon.innerHTML = '<img src="img/' + choice + '.png"> '
  playerPick.textContent = "You made your pick"
  pcPick.textContent = "Opponent's pick"
  pcWeapon.innerHTML = '<img src="img/' + weapons[pcChoice] + '.png"> '
}

function updateScoreBoard(winner) {
  const playerPoints = document.getElementById("point")
  const pcPoints = document.getElementById("pc-point")
  if (winner == "player") {
    playerPoints.src = "img/star_point.png"
  } else if (winner == "pc") {
    pcPoints.src = "img/star_point.png"
  }
}
