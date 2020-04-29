export function encode(input: string): string {
    // (.) - matches any char
    // \1+ - matches one or more
    const regexp = /(.)\1+/g;

    const result = input.replace(regexp, (match, ...args) => {
        return `${match.length}${args[0]}`;
    });

    return result;
}

export function decode(input: string): string {
    // d+ - matches one or more decimal
    // [a-zA-Z] - matches one letter
    const regexp = /\d+[a-zA-Z]/g;

    const result = input.replace(regexp, (match) => {
        const [count, char] = match.split(/([\d\.]+)(.*)/).filter(r => r !== '')
        return char.repeat(parseInt(count));
    });

    return result;
}