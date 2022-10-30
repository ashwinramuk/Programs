Palindrome
Check if the given string is a palindrome string.

A sequence is said to be palindrome if reverse of the sequence is same as the initial sequence.

Input
Single line containing a string with no end of line character.

String sequence contain only alphabets. Consider lower case letters as equivalent to upper case letters.

Output
Single containing YES if it is a palindrome

Single containing NO if it isn't a palindrome

Example
Input:

Tenet

Output:

YES
var uniqueMorseRepresentations = function(words) {
    const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const s = new Set();
    words.map(word => {
        let output = '';
        for (let i = 0; i < word.length; i++) {
            output += dict[word.charCodeAt(i) - 97]
        }
        if(!s.has(output)) s.add(output);
    });
    return s.size
};