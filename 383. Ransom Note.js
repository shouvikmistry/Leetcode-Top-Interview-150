/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

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
*/
var canConstruct = function(ransomNote, magazine) {
    let charArr = new Array(26).fill(0);

    for (let i = 0; i < magazine.length; i++) {
        charArr[magazine.charCodeAt(i)-'a'.charCodeAt(0)]++;  
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (charArr[ransomNote.charCodeAt(i)-'a'.charCodeAt(0)]===0) {
            // break;
            return false;
        }
        charArr[ransomNote.charCodeAt(i)-'a'.charCodeAt(0)]--;
        if (i<ransomNote.length) {
        }
    }
    return true;
};
// magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj";
// ransomNote = "bgx";
magazine = "aab";
ransomNote = "aa";
console.log(canConstruct(ransomNote, magazine)); // true