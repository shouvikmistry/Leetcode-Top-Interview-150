/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
#include<bits/stdc++.h>
using namespace std;
class Solution{
    public:
    bool isAnagram(string s,string t){
        unordered_map<char,int> charMapping;
        for(auto c : s){
            charMapping[c]++;
        }

        for(auto c : t){
            if(charMapping[c] == 0) return false;
            charMapping[c]--;
        }
        
        return true;
    }
    bool isAnagramArrayMethod(string s,string t){
        int charMapping[26] = {0};
        for(auto c : s){
            charMapping[c-'a']++;
        }

        for(auto c : t){
            if(charMapping[c - 'a'] == 0) return false;
            charMapping[c - 'a']--;
        }
        
        return true;
    }
};
int main(){
    Solution s;
    cout << s.isAnagram("anagram","nagaram") <<endl;
    cout << s.isAnagram("rat","car") <<endl;
    cout << s.isAnagramArrayMethod("anagram","nagaram") <<endl;
    cout << s.isAnagramArrayMethod("rat","car") <<endl;
}