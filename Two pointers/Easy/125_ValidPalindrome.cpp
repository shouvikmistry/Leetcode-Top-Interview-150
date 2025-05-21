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
class Solution
{
public:
    bool isPalindrome(string s)
    {   
        // Initialize a boolean variable to track if the string is a palindrome
        bool isPalindrome = true;
        string newStr = "";

        // Step 1: Convert the string to lowercase
        transform(s.begin(), s.end(), s.begin(), ::tolower);
        // transform() parameters:
        // 1. Input start (s.begin())
        // 2. Input end (s.end())
        // 3. Output start (s.begin(), overwrites original string)
                 /*
                #The third argument is the starting position where results are stored.

                Since it’s the same as the input range, the original string is overwritten in-place.

                (If you wanted to store the result elsewhere, you could pass another iterator, like dest.begin() for a different container dest.)*/
        // 4. Conversion function (::tolower from <cctype>)

        // Step 2: Filter out non-alphanumeric characters
        string character = "abcdefghijklmnopqrstuvwxyz0123456789";
        for (int i = 0; i < s.size(); i++)
        {
            if (character.find(s[i]) != -1)
            {
                newStr += (s[i]);
            }
        }

        // Step 3: Check if the filtered string is a palindrome
        int left = 0;
        int right = newStr.size() - 1;
        while (left < right)
        {
            if (newStr[left] != newStr[right]){
                isPalindrome = false; //Early exit if mismatch found
                break;
            }else{
                left++;
                right--;
            }
        }
        return isPalindrome;
    }
};

int main() {
    Solution sol;
    string test1 = "A man, a plan, a canal: Panama";
    string test2 = "race a car";
    string test3 = " ";

    cout << sol.isPalindrome(test1) << endl;  // Output: 1 (true)
    cout << sol.isPalindrome(test2) << endl;  // Output: 0 (false)
    cout << sol.isPalindrome(test3) << endl;  // Output: 1 (true)

    return 0;
}