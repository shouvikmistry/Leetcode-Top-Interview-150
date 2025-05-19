/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/
var isPalindrome = function (s) {
    let res = true;
    let newStr = "";
    let char = "abcdefghijklmnopqrstuvwxyz0123456789";
    s = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (char.indexOf(s[i]) !== -1) {
            newStr += s[i];
        }
    }
    let left = 0, right = newStr.length - 1;
    while(left<=right){
        if (newStr[left] == newStr[right]) {
            left++;
            right--;
        } else {
            res = false;            
            break;
        }
    }
    return res;
}

// Example usage:
s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

s = "race a car";
console.log(isPalindrome(s));

s = " ";
console.log(isPalindrome(s));