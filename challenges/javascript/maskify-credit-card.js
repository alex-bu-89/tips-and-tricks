/**
 * Masks all digits (0-9) with #, unless they are first or last four characters.
 * 
 * @param {string} creditCard - "4556364607935616"
 * @return {string} "4###########5616"
 */
function maskify(creditCard) {
    const SKIP_START = 1;
    const SKIP_END = 4;
    const MIN_LENGTH = 6;

    if (typeof creditCard !== 'string') {
        throw new Error('maskify - creditCard should be a string');
    }

    if (creditCard.length < MIN_LENGTH) {
        return creditCard;
    }

    const creditCardArr = creditCard.split('');

    const maskedArr = creditCardArr.map((char, index) => {
        const charInt = parseInt(char);
        const shoudBeMasked = !isNaN(charInt) && index > SKIP_START - 1 && index < creditCardArr.length - SKIP_END;

        if (shoudBeMasked) {
            return '#';
        }

        return char;
    });

    return maskedArr.join('');
}