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
    // let result; // should be initialized to an empty array before using it because we are going to push elements into it
    let result = [];
    // let anagramMap; // should be initialized to an empty Map before using it because we are going to store key-value pairs in it using the Map object .has() and .set() methods
    let anagramMap = new Map();

    for(let str of strs){
        //let sortedString = str.sort() // This line is incorrect because strings do not have a sort method. We need to convert the string to an array of characters, sort it, and then join it back to a string.
        // how we do that is by splitting the string into an array of characters, sorting the array, and then joining it back to a string
        // str.split('') converts the string to an array of characters
        // .sort() sorts the array of characters in ascending order
        // .join('') joins the array of characters back to a string
        let sortedString = str.split('').sort().join('');
        if(!anagramMap.has(sortedString)){
            anagramMap.set(sortedString, []);
        }
        anagramMap.get(sortedString).push(str);
    }

    for(let group of anagramMap.values()){
        result.push(group);
    }
    return result;
};
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
// Example usage:
let strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));