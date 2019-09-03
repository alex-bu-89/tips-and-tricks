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