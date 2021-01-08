const text = require('./onegin');

function populateWordsToCounts(string) {
    const wordsMap = string
        .split(/[\b\s(!«».,"'`)\b]/g)
        .filter((w) => w.length !== 0)
        .map((w) => w.toLowerCase())
        .reduce((acc, word) => {
            acc[word] ? acc[word] += 1 : acc[word] = 1; 
            return acc;
        }, {});

    return wordsMap;
}

const wordsToCounts = populateWordsToCounts(text);
console.log('------------>', wordsToCounts);