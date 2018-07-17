# Table of Contents
1. [Unscramble words](#unscramble-words)

## Unscramble words
```js
// unscramble word
var wordsList = ['love', 'foo', 'blab', 'blay', 'vole', 'evol', 'lovy', 'fdsfdsfdsf'];

var unscramble = (word) => {
  let possibleMatch = wordsList
  // match words with the same length
  .filter((w) => {
    return word.length === w.length;
  })
  // check letters
  .filter((w) => {
    let wordToCheck = word.split('');

    // remove matched lattes from wordToCheck array
    w.split('').map((letter) => {           
      let letterIndex = wordToCheck.indexOf(letter);

      if(letterIndex > -1) {
        wordToCheck.splice(letterIndex, 1);
      }             
    })

    // if wordToCheck is empty it's a match
    if(wordToCheck.length === 0){
      wordToCheck = ''
      return true
    }

    // otherwise not
    wordToCheck = ''
    return false;
  })  
}

unscramble('ovel');

```

## Remove dublicates from array
```js
let removeDublicates = (array) => {
  let result = array.filter((item, index) => {
    return array.indexOf(item) == index
  })

  return result;
}

removeDublicates([1,3,2,4]);
removeDublicates([1,3,3]);
removeDublicates([1,4,1,4]);
removeDublicates([1,1,1,1,1,1]);
```
