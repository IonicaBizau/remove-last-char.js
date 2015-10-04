/**
 * RemoveLastChar
 * Removes the last character from a given string.
 *
 * @name RemoveLastChar
 * @function
 * @param {String} input The input string.
 * @return {String} The input string without the last character.
 */
function RemoveLastChar(input) {
    return input.substring(0, input.length - 1);
}

module.exports = RemoveLastChar;
