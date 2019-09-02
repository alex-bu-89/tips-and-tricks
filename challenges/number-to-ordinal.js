/**
* Takes a number and return it as a string with the correct ordinal indicator suffix (in English)
* 
* @param {number} n - example 5
* @return {string} "5th"
*/
function numberToOrdinal(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new Error('numberToOrdinal - n should be a number');
    }

    if (n === 0) {
        return n;
    }

    // parse floating integer
    parsedN = parseInt(n);

    const numberArr = parsedN.toString().split('').map(digit => parseInt(digit));
    const secondLast = numberArr[numberArr.length - 2];
    const last = numberArr.pop();

    if (!secondLast || secondLast !== 1) {
        switch (last) {
            case 1:
                return `${parsedN}st`;
            case 2:
                return `${parsedN}nd`;
            case 3:
                return `${parsedN}rd`;
        }
    }

    return `${parsedN}th`;
}