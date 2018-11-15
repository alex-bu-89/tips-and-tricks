# Table of Contents
1. [Unscramble words](#unscramble-words)
2. [Remove dublicates from array](#remove-dublicates-from-array)

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

## Batches
```js
let batches = (recipe, available) => {
  const result = [];

  for (prodName in recipe) {
    if (available[prodName] === undefined) return 0;

    const canCooked = Math.floor(available[prodName] / recipe[prodName]);
    result.push(canCooked);
  }

  return Math.min(...result);
}

// 0 batches can be made
batches(
  { milk: 100, butter: 50, flour: 5 },
  { milk: 132, butter: 48, flour: 51 }
)

batches(
  { milk: 100, flour: 4, sugar: 10, butter: 5 },
  { milk: 1288, flour: 9, sugar: 95 }
)

// 1 batch can be made
batches(
  { milk: 100, butter: 50, cheese: 10 },
  { milk: 198, butter: 52, cheese: 10 }
)

// 2 batches can be made
batches(
  { milk: 2, sugar: 40, butter: 20 },
  { milk: 5, sugar: 120, butter: 500 }
)
```

## Sort best scores
```js
const HIGHEST_POSSIBLE_SCORE = 100;
let unsortedScores = [37, 89, 41, 65, 91, 53];

function sortScores(unorderedScores, highestPossibleScore) {
    // array of 0s at indices 0..highestPossibleScore
    var scoreCounts = [];
    for (var i = 0; i < highestPossibleScore + 1; i++) {
        scoreCounts.push(0);
    }

    // populate scoreCounts
    unorderedScores.forEach(function(score) {
        scoreCounts[score]++;
    });

    // populate the final sorted array
    var sortedScores = [];

    // for each item in scoreCounts
    for (var score = highestPossibleScore; score >= 0; score--) {
        var count = scoreCounts[score];

        // for the number of times the item occurs
        for (var time = 0; time < count; time++) {
            sortedScores.push(score);
        }
    }

    return sortedScores;
}

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
```
