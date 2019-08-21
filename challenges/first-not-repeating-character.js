/**
 * Given a string s consisting of small English letters, 
 * find and return the first instance of a non-repeating character in it. 
 * If there is no such character, return '_'.
 * 
 * Example
 * 
 * For s = "abacabad", the output should be
 * firstNotRepeatingCharacter(s) = 'c'.
 * There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
 * 
 * For s = "abacabaabacaba", the output should be
 * firstNotRepeatingCharacter(s) = '_'.
 * There are no characters in this string that do not repeat.
 * 
 * @param {string} s input string
 * @return {string} _ or first not repeating character
 */
function firstNotRepeatingCharacter(s) {  
    const arr = s.split('');
    
    for (let i = 0; i < arr.length; i++) {
        const chr = arr[i];
        
        if (arr.indexOf(chr) == arr.lastIndexOf(chr)) {
            return chr;
        }
    }
    
    return '_'
}