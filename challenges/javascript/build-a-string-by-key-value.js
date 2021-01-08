/**
 * Build string by the object where key=letter; value=indexes
 */

const obj = {
    ' ': [5],
    d: [10],
    e: [1],
    H: [0],
    l: [2, 3, 9],
    o: [4, 7],
    r: [8],
    w: [6],
}

const buildString = (m) => {
    const result = [];
    for (const key of Object.keys(m)) {
        m[key].forEach(charIndex => {
            result[charIndex] = key;
        });
    }

    return result.join('');
}

const result = buildString(obj);
console.log(result);