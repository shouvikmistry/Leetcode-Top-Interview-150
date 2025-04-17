/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

var strStr = function (haystack, needle) {
    let res = -1;
    let k = 0;
    // if (!strs.length) {
    //     return  res;
    // }

    // let haystack = "miss issippi", needle = "issip";
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[k]) {
            k++;
            if (k==needle.length) {
                return i-(k-1);
            }
        } else{
            i = i-k;
            k = 0;
        }
    }
    return res;
};

//inputs
// let haystack = "sadbutsad", needle = "sad";
let haystack = "mdississippi", needle = "issip";
console.log(strStr(haystack, needle)); // Expected output: 0