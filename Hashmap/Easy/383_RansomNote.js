/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
 * 
 * 
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let charCount = new Map();
    for (const c of magazine) {
        charCount[c] = (charCount[c] || 0) + 1; //to avoid undefined if c is not in the map set it to 0,if it already exists increment it
    }
    for (const c of ransomNote) {
        if (!charCount[c]) {
            return false; //if the character is not in the map or its count is 0, return false
        }
        charCount[c]--; //decrement the count of the character
    }
    return true;
}
// Time Complexity: O(n + m) where n is the length of ransomNote and m is the length of magazine.
// Space Complexity: O(1) since the character set is fixed (lowercase English letters), the space used by the map is constant.

//Alternative solution using an array instead of a map
var canConstruct2 = function (ransomNote, magazine) {
    let charCount = new Array(26).fill(0); // Array to count characters, assuming only lowercase letters
    // made a fixed size array of 26 to represent 'a' to 'z'
    // 'a' is at index 0, 'b' at index 1, ..., 'z' at index 25

    for (const c of magazine) {
        charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++; // Increment the count for the character
        // charCodeAt(0) gives the ASCII value of the character, subtracting 'a'.charCodeAt(0) gives the index in the array
        // e.g., 'a' -> 0, 'b' -> 1, ..., 'z' -> 25
        // 'a'-'a' = 0, 'b'-'a' = 1, ..., 'z'-'a' = 25
        // This way we can use the character's ASCII value to index into the array
    }

    for (const c of ransomNote) {
        if (charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)] == 0) {
            return false; // If count goes zero, return false
        }
        charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]--; // Decrement the count for the character
    }
    return true;
}
// Time Complexity: O(n + m) where n is the length of ransomNote and m is the length of magazine.
// Space Complexity: O(1) since the character set is fixed (lowercase English letters), the space used by the array is constant.

// Example usage:
console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "ab")); // false
console.log(canConstruct("aa", "aab")); // true

// Example usage for the alternative solution:
console.log(canConstruct2("a", "b")); // false
console.log(canConstruct2("aa", "ab")); // false
console.log(canConstruct2("aa", "aab")); // true