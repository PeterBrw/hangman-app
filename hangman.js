const Hangman = function(word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function() {
  let result = ''
  this.word.forEach((letter) => {
    if(this.guessedLetters.includes(letter)) {
      result += letter
    } else if(letter === ' ') {
      result += ' '
    } else {
      result += '*'
    }
  })
  
  return result
}

Hangman.prototype.makeGuess = function(guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if(isUnique) {
    this.guessedLetters.push(guess)
  }

  if(isUnique && isBadGuess) {
    this.remainingGuesses--
  }
}

const game1 = new Hangman('Cat', 2)

console.log(game1.getPuzzle())
console.log(game1.remainingGuesses)

window.addEventListener('keypress', function(e) {
  const guess = String.fromCharCode(e.charCode)
  game1.makeGuess(guess)
  console.log(game1.getPuzzle())  
  console.log(game1.remainingGuesses)

})