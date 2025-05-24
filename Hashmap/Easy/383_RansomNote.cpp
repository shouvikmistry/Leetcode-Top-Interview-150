/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

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
 *
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    bool canConstruct(string ransomNote, string magazine)
    {

        unordered_map<char, int> m;

        for (char c : magazine)
        {
            m[c]++;
        }

        for (char c : ransomNote)
        {
            if (m[c] == 0)
            {
                return false;
            }
            m[c]--;
        }
        return true;
    }

    //Alternative solution using array
    bool canConstructArray(string ransomNote, string magazine)
    {
        vector<int> m(26, 0);

        for (char c : magazine)
        {
            m[c - 'a']++;
        }

        for (char c : ransomNote)
        {
            if (m[c - 'a'] == 0)
            {
                return false;
            }
            m[c - 'a']--;
        }
        return true;
    }
    // Array solution is faster than unordered_map solution
    // because it uses a fixed size array instead of a hash table
    // Space complexity is O(1) because the size of the array is constant (26)

    //Array optimization solution
    bool canConstructArrayOptimized(string ransomNote, string magazine)
    {
        int count[26] = {0};
        for (char c : magazine) count[c - 'a']++;
        for (char c : ransomNote) {
            if (count[c - 'a'] == 0) return false;
            count[c - 'a']--;
        }
        return true;
    }
};

int main()
{
    Solution sol;
    string ransomNote = "aa", magazine = "aab";
    //  ransomNote = "a", magazine = "b";
     ransomNote = "aa", magazine = "ab";
    cout << (sol.canConstruct(ransomNote, magazine) ? "true" : "false") << endl;
    cout << (sol.canConstructArray(ransomNote, magazine) ? "true" : "false") << endl;
    cout << (sol.canConstructArrayOptimized(ransomNote, magazine) ? "true" : "false") << endl;
    return 0;
}
