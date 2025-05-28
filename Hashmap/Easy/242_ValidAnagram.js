/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }
    let ransomNote = s;
    let magazine = t;
    let charArr = new Array(26).fill(0);

    for (let i = 0; i < magazine.length; i++) {
        charArr[magazine.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (charArr[ransomNote.charCodeAt(i) - 'a'.charCodeAt(0)] === 0) {
            // break;
            return false;
        }
        charArr[ransomNote.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false

