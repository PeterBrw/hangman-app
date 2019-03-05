const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman('Car Parts', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
})

getPuzzle('1')
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })

// Making an HTTP request


getCountry('RO')
  .then(response => {
    console.log(response)
  })  
  .catch(err => {
    console.log(err)
  })
