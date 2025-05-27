/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.


Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

'a' maps to "dog".
'b' maps to "cat".
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false



Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
*/
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
#include <bits/stdc++.h>
#include <sstream>
using namespace std;
class Solution
{
public:
    bool wordPattern(string pattern, string words)
    {
        unordered_map<char, string> charMapping;

        istringstream iss(words);
        string w;
        vector<string> wordsArray;
        while (iss >> w){
            wordsArray.push_back(w);
        }

        if (pattern.size() != wordsArray.size()) return false;

        for (int i = 0; i < pattern.size(); i++)
        {
            char oneLetter = pattern[i];
            string word = wordsArray[i];

            if (charMapping.find(oneLetter) == charMapping.end())
            {
                for (auto pairs : charMapping)
                {
                    if (pairs.second == word) return false;
                }
                charMapping[oneLetter] = word;
            }
            else
            {
                if (charMapping[oneLetter] != word) return false;
            }
        }
        return true;
    }
};

int main()
{
    Solution s;
    cout << (s.wordPattern("abba", "dog cat cat dog")? "True" : "False") << endl;
    cout << (s.wordPattern("abba", "dog cat cat fish")? "True" : "False") << endl;
    cout << (s.wordPattern("aaaa", "dog cat cat dog")? "True" : "False") << endl;
    return 0;
}
