const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const resetBtn = document.getElementById("resetBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")
let attemptsList = []

let secretNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0

button.addEventListener("click", checkGuess)
resetBtn.addEventListener("click", resetGame)
input.addEventListener("keydown", function(e)
{ if(e.key === 'Enter') checkGuess() })

function checkGuess(){

  const guess = parseInt(input.value, 10)

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.innerText = "Número no válido (1-100)"
    return
  }

  attempts = attempts + 1
  attemptsList.push(guess)
  attemptsText.innerText = attempts


  let history = document.getElementById('history')
  if (!history) {
    history = document.createElement('p')
    history.id = 'history'
    const parent = attemptsText.parentNode

  }
  history.innerText = 'Intentos anteriores: ' + attemptsList.join(', ')

  input.value = ''

  if (guess === secretNumber) {
    message.innerText = "¡Ganaste!"
    resetGame(true)
    return
  }

  if (attempts >= 10) {
    message.innerText = `Perdiste. El número era ${secretNumber}.`
    button.disabled = true
    input.disabled = true
    return
  }

  if (guess < secretNumber) {
    message.innerText = "El número es mayor"
  } else {
    message.innerText = "El número es menor"
  }

}

