const Hangman = function(word, remainingGuesses, guesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guesses = ['c', 'e']
}

Hangman.prototype.getPuzzle = function() {
  let result = ''
  this.word.forEach((letter) => {
    if(this.guesses.includes(letter)) {
      result += letter
    } else if(letter === ' ') {
      result += ' '
    } else {
      result += '*'
    }
  })
  
  return result
}

const game1 = new Hangman('Cat', 2)
console.log(game1.getPuzzle())

const game2 = new Hangman('New Jersey', 4)
console.log(game2.getPuzzle())