/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    vector<vector<string>> groupAnagrams(vector<string> &strs)
    {
        vector<vector<string>> result;
        unordered_map<string, vector<string>> anagramMap;
        for(auto str : strs){
            string sorted_String = str;
            sort(sorted_String.begin(), sorted_String.end());
            if(!anagramMap.count(sorted_String)){
                anagramMap[sorted_String] = vector<string>();
            }
            anagramMap[sorted_String].push_back(str);
        }
        for (const auto &entry : anagramMap)
        {
            result.push_back(entry.second);
        }
        return result;
    }
};

int main()
{
    Solution sol;
    vector<string> strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
    vector<vector<string>> result = sol.groupAnagrams(strs);

    for (const auto &group : result)
    {
        for (const auto &str : group)
        {
            cout << str << " ";
        }
        cout << endl;
    }

    return 0;
}