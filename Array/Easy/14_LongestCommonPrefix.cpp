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
#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string prefix = "";
        sort(strs.begin(), strs.end());
        string firstPre = strs[0];
        string lastPre = strs[strs.size() - 1];
        for (int i = 0; i < firstPre.length(); i++) {
            if (firstPre[i] == lastPre[i]) {
                prefix += firstPre[i];
            } else {
                break;
            }
        }
        return prefix;
    }
};
int main() {
    Solution s;
    vector<string> strs = {"flower", "flow", "flight"};
    cout << s.longestCommonPrefix(strs) << endl; // Output: "fl"
    vector<string> strs2 = {"dog", "racecar", "car"};
    cout << s.longestCommonPrefix(strs2) << endl; // Output: ""
    vector<string> strs3 = {"a", "b", "c"};
    cout << s.longestCommonPrefix(strs3) << endl; // Output: ""
    return 0;
}