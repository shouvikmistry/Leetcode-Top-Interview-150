/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true

 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isIsomorphic(string s, string t) {
        if (s.length() != t.length()) return false;

        unordered_map<char, char> charMapping;

        for (int i = 0; i < s.length(); i++) {
            char original = s[i];
            char replacement = t[i];

            if (charMapping.find(original) == charMapping.end())
                // not found in the map it will go upto end of the map thats why we are using end() the if(true) enter the if block

                //but found in the map it will go to else block 

            {
                // Check if replacement is already mapped to another character
                for (auto pair : charMapping) {
                    if (pair.second == replacement) {
                        return false;
                    }
                }

                // If not, add the mapping
                charMapping[original] = replacement;  
            } 
            // if the original character is already mapped then we will go to else block
            else {
                // If it is already mapped, check if it maps to the same character pass the else block

                // If it does not map to the same character, return false
                if (charMapping[original] != replacement) {
                    return false;
                }

            }
        }
        // If we reach here, the strings are isomorphic
        return true;
    }
};
int main() {
    Solution solution;
    cout << boolalpha; // Print boolean values as true/false
    cout << solution.isIsomorphic("egg", "add") << endl; // Output: true
    cout << solution.isIsomorphic("foo", "bar") << endl; // Output: false
    cout << solution.isIsomorphic("paper", "title") << endl; // Output: true
    return 0;
}