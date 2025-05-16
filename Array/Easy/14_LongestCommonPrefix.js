/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
 * 
 * 
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let res = "";
    strs.sort();
    firstPre = strs[0];
    lastPre = strs[strs.length - 1];
    for (let i = 0; i < firstPre.length; i++) {
        if (firstPre[i] === lastPre[i]) {
            res += firstPre[i];
        } else {
            break;
        }
    }
    return res;
};
// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["a", "b", "c"])); // Output: ""