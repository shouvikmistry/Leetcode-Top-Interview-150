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
#include <bits/stdc++.h>
using namespace std;
class Solution {
public:
    bool isPalindrome(string s) {
        bool isPalindrome = true;
        string str = "";
        for (int i = 0; i < s.length(); i++) {
            if (isalnum(s[i])) {
                str += tolower(s[i]);
            }
        }
        int left = 0, right = str.length() - 1;
        while (left < right) {
            if (str[left] != str[right]) {
                isPalindrome = false;
                break;
            }
            left++;
            right--;
        }
        return isPalindrome;
    }
};
int main() {
    Solution s;
    string str;
    str = "A man, a plan, a canal: Panama";
    cout << s.isPalindrome(str) << endl;
    str = "race a car";
    cout << s.isPalindrome(str) << endl;
    str = " ";
    cout << s.isPalindrome(str) << endl;
    return 0;
}