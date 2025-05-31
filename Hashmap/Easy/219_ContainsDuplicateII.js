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

// Approach: Sliding Window with HashSet
// Time Complexity: O(n), Space Complexity: O(min(n, k)))
var containsNearbyDuplicate = function(nums, k) {
    const window = new Set();
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        if (right-left > k) {
            window.delete(nums[left]);
            left++;
        }
        if (window.has(nums[right])) {
            return true;
        }else {
            window.add(nums[right]);
        }
    }
    return false;
};

//HashMap Approach
// Time Complexity: O(n), Space Complexity: O(n)
var containsNearbyDuplicateHashMap = function(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};


// Example usage:
let nums = [1,2,3,1], k = 3;
console.log(containsNearbyDuplicate(nums, k)); //output: true
console.log(containsNearbyDuplicateHashMap(nums, k)); //output: true


nums = [1,0,1,1], k = 1;
console.log(containsNearbyDuplicate(nums, k)); //output: true
console.log(containsNearbyDuplicateHashMap(nums, k)); //output: true

nums = [1,2,3,1,2,3], k = 2;
console.log(containsNearbyDuplicate(nums, k)); //output: false
console.log(containsNearbyDuplicateHashMap(nums, k)); //output: false
