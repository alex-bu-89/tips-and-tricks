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
        const count = scoreCounts[score];

        // for the number of times the item occurs
        for (let time = 0; time < count; time++) {
            sortedScores.push(score);
        }
    }

    return sortedScores;
}

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
