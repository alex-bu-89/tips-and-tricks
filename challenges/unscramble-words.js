// unscramble word
const wordsList = ['love', 'foo', 'blab', 'blay', 'vole', 'evol', 'lovy', 'fdsfdsfdsf'];

const unscramble = (word) => {
  const possibleMatch = wordsList
    .filter((w) => {
      // match words with the same length
      return word.length === w.length;
    })
    // check letters
    .filter((w) => {
      let wordToCheck = word.split('');

      // remove matched lattes from wordToCheck array
      w.split('').map((letter) => {
        let letterIndex = wordToCheck.indexOf(letter);

        if (letterIndex > -1) {
          wordToCheck.splice(letterIndex, 1);
        }
      })

      // if wordToCheck is empty it's a match
      if (wordToCheck.length === 0){
        wordToCheck = ''

        return true
      }

      // otherwise not
      wordToCheck = ''

      return false;
    })
}

unscramble('ovel');
