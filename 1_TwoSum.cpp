/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/
#include<bits/stdc++.h>
using namespace std;
class Solution {
    public:
        vector<int> twoSum(vector<int>& nums, int target) {

            //Brute force approach
            // Time complexity: O(n^2)
            // Space complexity: O(1)
            /*
            for (int i = 0; i < nums.size(); i++) {
                for (int j = i + 1; j < nums.size(); j++) {
                    if (nums[i] + nums[j] == target) {
                        return {i, j};
                    }
                }
            }
            */
            //Optimized approach using hash map
            // Time complexity: O(n)
            // Space complexity: O(n)
            map<int, int> map;
            for (int i = 0; i < nums.size(); i++)
            {
                int complement = target - nums[i];
                if(map.count(complement)) {
                    return {map[complement], i};
                }
                map.insert({nums[i], i});
            }
            
            return {};
        }
    };
int main() {
    Solution s;
    vector<int> nums;
    int target;
    // Example 1
    nums = {2,7,11,15};
    target = 9;
    // Example 2
    nums = {3,2,4}; 
    target = 6;
    // Example 3
    // nums = {3,3};
    // target = 6;
    vector<int> result = s.twoSum(nums, target);
    for (int i : result) {
        cout << i << " ";
    }
    return 0;
}