/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.



Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
#include <bits/stdc++.h>
using namespace std;

// Brute Force method
//  Time Complexity: O(n^2)
//  Space Complexity: O(1)
bool containsNearbyDuplicate(vector<int> &nums, int k)
{
    for (int i = 0; i < nums.size(); i++)
    {
        for (int j = i + 1; j < nums.size(); j++)
        {
            if (nums[i] == nums[j] && abs(i - j) <= k)
            {
                return true;
            }
        }
    }
    return false;
}

// Hashmap method
//  Time Complexity: O(n)
//  Space Complexity: O(n)
bool containsNearbyDuplicateHashMap(vector<int> &nums, int k)
{
    unordered_map<int, int> numIndexMap; // Map to store the last index of each number
    // 1st key is the number, 2nd value is the index of that number
    // eg: if nums = [1,2,3,1] then numIndexMap will be {1:0, 2:1, 3:2, 1:3}
    // where 1 is the key and 0 is the index of that number in nums

    for (int i = 0; i < nums.size(); i++)
    {
        if (numIndexMap.count(nums[i]) && i - numIndexMap[nums[i]] <= k)
        // here numIndexMap[nums[i]] is working as j
        // eg: if nums = [1,2,3,1] and k = 3, then for i=3, numIndexMap[nums[i]] will be 0
        // why? because numIndexMap[1] = 0, which is the last index of 1
        // and why not need abs(i - j) <= k? because we are already checking the last index of the number which is stored in the map,which is always positive

        {
            return true; // Found a duplicate within the range
        }
        numIndexMap[nums[i]] = i; // Update the last index of the number
    }
    return false; // No duplicates found within the range
}

//Sliding Window method
//  Time Complexity: O(n), Space Complexity: O(min(n, k)))
bool containsNearbyDuplicateSlidingWindow(vector<int> &nums, int k)
{
    unordered_set<int> window; // Set to store the current window of size k
    for (int i = 0; i < nums.size(); i++)
    {
        if (i > k) // Remove the element that is out of the window
        {
            window.erase(nums[i - k - 1]);
        }
        if (window.count(nums[i])) // Check if the current number is already in the window
        {
            return true; // Found a duplicate within the range
        }
        window.insert(nums[i]); // Add the current number to the window
    }
    return false; // No duplicates found within the range
}

int main()
{
    vector<int> nums;
    int k;
    // nums = {1,2,3,1},k = 3;
    // nums = {1,0,1,1},k = 1;
    nums = {1, 2, 3, 1, 2, 3}, k = 2;
    // cout << containsNearbyDuplicate(nums,k)<<endl;
    cout << (containsNearbyDuplicate(nums, k) ? "True" : "False") << endl;
    cout << (containsNearbyDuplicateHashMap(nums, k) ? "True" : "False") << endl;
    cout << (containsNearbyDuplicateSlidingWindow(nums, k) ? "True" : "False") << endl;
    return 0;
}
