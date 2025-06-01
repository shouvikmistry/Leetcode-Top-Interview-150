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
var groupAnagrams = function(strs) {
    let result;
    let anagramMap;
    for(let str of strs){
        let sortedString = str;
        sortedString.sort();
        if(!anagramMap.has(sortedString)){
            anagramMap.set(sortedString, []);
        }
        anagramMap.get(sortedString).push(str);
    }
    /*
    eg: strs = ["eat","tea","tan","ate","nat","bat"]
    str = "eat"
    sortedString = "aet"
    anagramMap = {
      "aet": ["eat", "tea", "ate"],
      "ant": ["tan", "nat"],
      "abt": ["bat"]
    }

     Convert the Map values to an array
    anagramMap.values() returns an iterator of the values in the map
    .values() returns an iterator of the values in the map
    eg. [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
    group = ["eat", "tea", "ate"]
    Convert the iterator to an array
    we are pusing array of anagrams to the result array
    so we can push it to the result array
    result = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

    anagramMap.keys() returns an iterator of the keys in the map
    eg. ["aet", "ant", "abt"]

    */
    for(let group of anagramMap.values()){


        result.push(group);
    }
    return result;
};