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
    playGame(choice, pcChoice)
  })
})

function playGame(choice, pcChoice) {
  playRound(choice, pcChoice)
  changeContent(choice, pcChoice)
  setTimeout(reset, 2000)
}

function playRound(choice, pcChoice) {
  const result = document.getElementById("round-result")
  let playerScore = 0
  let pcScore = 0
  if (weakStrong[choice].strongTo === weapons[pcChoice]) {
    playerScore += 1
    updateScoreBoard("player")
    console.log(playerScore)
    result.textContent = "You win!"
  } else if (weakStrong[choice].weakTo === weapons[pcChoice]) {
    pcScore += 1
    updateScoreBoard("pc")
    console.log(pcScore)
    result.textContent = "You lose!"
  } else {
    console.log("tie")
    console.log(playerScore)
    console.log(pcScore)
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
  if (winner == "player") {
    addPlayerPoints()
  } else if (winner == "pc") {
    addPcPoints()
  }
}

function addPlayerPoints() {
  const playerPoints = document.querySelectorAll("#player-points > img#noPoint")
  console.log(playerPoints)
  for (point of playerPoints) {
    console.log(point)
    point.src = "img/star_point.png"
    point.id = "point"
    break
  }
}
function addPcPoints() {
  const pcPoints = document.querySelectorAll("#pc-points > img#noPoint")
  console.log(pcPoints)
  for (point of pcPoints) {
    console.log(point)
    point.src = "img/star_point.png"
    point.id = "point"
    break
  }
}

function reset() {
  const playerPick = document.getElementById("player-info")
  const playerWeapon = document.getElementById("player-choices")
  const pcPick = document.getElementById("pc-info")
  const pcWeapon = document.getElementById("pc-choices")
  const result = document.getElementById("round-result")
  playerWeapon.innerHTML =
    '<img src="img/rock.png" alt="rock" id="rock" /> <img src="img/paper.png" alt="paper" id="paper" /> <img src="img/scissors.png" alt="scissors" id="scissors" /> '
  playerPick.textContent = "Make your pick"
  pcPick.textContent = "Waiting for the opponent"
  pcWeapon.innerHTML = '<div class="loader"></div> '
  result.textContent = ""
  document.querySelectorAll("#player-choices > img").forEach((element) => {
    element.addEventListener("click", (event) => {
      const choice = event.target.id
      const pcChoice = Math.floor(Math.random() * 3)
      playGame(choice, pcChoice)
    })
  })
}
