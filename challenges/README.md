# Table of Contents
1. [Unscramble words](./unscramble-words.js)
1. [Remove dublicates from array](./remove-dublicates.js)
1. [Batches](./batches.js)
1. [Sort best scores](./top-scores.js)
1. [Find first dublicate](./first-duplicate.js)
1. [First not repeating character](./firstNotRepeatingCharacter.js)

## Unscramble words
```js
// unscramble word
const wordsList = ['love', 'foo', 'blab', 'blay', 'vole', 'evol', 'lovy', 'fdsfdsfdsf'];

function unscramble(word) {
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
function removeDublicates (array){
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
function batches(recipe, available) {
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
    const scoreCounts = [];
    for (let i = 0; i < highestPossibleScore + 1; i++) {
        scoreCounts.push(0);
    }

    // populate scoreCounts
    unorderedScores.forEach(function(score) {
        scoreCounts[score]++;
    });

    // populate the final sorted array
    const sortedScores = [];

    // for each item in scoreCounts
    for (let score = highestPossibleScore; score >= 0; score--) {
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


## Find first dublicate

Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

```js
/**
 * Finds the first duplicate number 
 * for which the second occurrence has the minimal index
 * @param {int[]} arr [2, 1, 3, 5, 3, 2]
 * @return {int} first duplicate or -1
 */
function firstDuplicate(arr) {
  const collection = new Set();
  
  for (element of arr) {
    if (collection.has(element)){
      
      return element;
    } else {
      collection.add(element);
    }   
  }

  return -1;
}
```
