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
    let char = "abcdefghijklmnopqrstuvwxyz0123456789";// setting the alphanumeric characters for comparison
    s = s.toLowerCase();// convert to lowercase
    // remove all non-alphanumeric characters(eg. spaces, punctuation, etc.)
    for (let i = 0; i < s.length; i++) {
        if (char.indexOf(s[i]) !== -1) // check if the character is alphanumeric
        // char.indexOf(s[i]) !== -1 checks if the character is in the string char
        // if it is not -1, it means the character is in the string char
        // if it is -1, it means the character is not in the string char
            {
            newStr += s[i];
            }
    }

    // Now we have a new string with only alphanumeric characters
    // Now we need to check if the new string is a palindrome
    // We can use two pointers to check if the new string is a palindrome

    let left = 0; // left pointer starting from the beginning of the string
    let right = newStr.length - 1; // right pointer starting from the end of the string
    // dummy string "a b c d e"
    //               ^       ^  
    //               left    right

    while(left<right)
    // while the left pointer is less than the right pointer
    // left and right pointer will meet in the middle 
    // "a b c d e"
    //      ^
    //      right
    //      left

    // loop will stop when left crosses right
        {
        if (newStr[left] == newStr[right]) {
        // "A B C B A"
        //  ^       ^
        //  left   right
            left++;
            right--;
        // "A B C B A"
        //    ^   ^
        // "A B C B A"
        //      ^
        //iterate to the next character
        } else {
        // "A B C D E"
        //  ^       ^
            res = false;            
            break;
        }
    }
    // "A B C B A"
    //      ^
    // if it itterate middle or left crosses right
    // then it is a palindrome
    return res;// return true;
}

// Example usage:
s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

s = "race a car";
console.log(isPalindrome(s));

s = " ";
console.log(isPalindrome(s));