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

/**
 * Calculates an expression in Reverse Polish notation
 * 
 * @param {string} expression - "10000 123 +"
 * @return {number} 10123
 */
function calculate(expression) {
    const PLUS = '+';
    const MINUS = '-';
    const MULTIPLY = '*';
    const DIVIDE = '/';

    const expressionArr = expression.split(' ');
    const operators = [PLUS, MINUS, MULTIPLY, DIVIDE];
    const stack = [];

    if (expressionArr.length === 0) {
        return 0;
    }

    expressionArr.forEach((char) => {
        const digit = Number(char);

        if (!isNaN(digit)) {
            stack.push(digit);
        } else if (operators.includes(char) && stack.length > 1) {
            const last = stack.pop();
            const secondLast = stack.pop();

            switch (char) {
                case PLUS:
                    stack.push(secondLast + last);
                    break;
                case MINUS:
                    stack.push(secondLast - last);
                    break;
                case MULTIPLY:
                    stack.push(secondLast * last);
                    break;
                case DIVIDE:
                    if (last === 0) {
                        throw new Error('calculate - division by zero is not possible');
                    }

                    stack.push(secondLast / last);
                    break;
            }
        } else {
            throw new Error('calculate - character is not recognized. Supported operators: ' + operators.toString());
        }
    });

    return stack[stack.length - 1];
}