"use strict";
/**
 * This file is used by deno and node
 * Deno imports from the ts file
 * Whereas node imports from the js file (after ts file is compiled
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchesContextTitle = exports.hasBrackets = void 0;
/**
 * Check a Line For Brackets
 *
 * Checks the text in the line of the file for any brackets ([, ]) to
 * determine if the line-reader has reached a context title, thus reaching a NEW
 * context
 *
 * @param {string} lineText The text in the line being read by the line-reader
 * @return {boolean} True or false based on if the line has brackets
 */
function hasBrackets(lineText) {
    return lineText.indexOf("[") === 0 &&
        lineText.indexOf("]") === (lineText.length - 1);
}
exports.hasBrackets = hasBrackets;
/**
 * Does the Line Match a Title
 *
 * Checks a line against any context title we are looking for to determine
 * if the line-reader has reached a context to grab
 *
 * @param {string} lineText The text in the line being read by the line-reader
 * @param {string[]} contextTitles The array of titles given on CL execution
 * @return {boolean} True or false, based on success of function
 */
function matchesContextTitle(lineText, contextTitles) {
    // Make sure we are looking at a title
    var isAMatchingTitle = false;
    if (hasBrackets(lineText)) {
        contextTitles.forEach(function (title) {
            // check for a match
            if (lineText.indexOf(title) !== -1) {
                isAMatchingTitle = true;
            }
        });
    }
    return isAMatchingTitle;
}
exports.matchesContextTitle = matchesContextTitle;