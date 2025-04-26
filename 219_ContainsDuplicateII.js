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
//input: nums = [1,2,3,1], k = 3
let nums = [1,2,3,1], k = 3;
console.log(containsNearbyDuplicate(nums, k)); //output: true
//input: nums = [1,0,1,1], k = 1
nums = [1,0,1,1], k = 1;
console.log(containsNearbyDuplicate(nums, k)); //output: true
//input: nums = [1,2,3,1,2,3], k = 2
nums = [1,2,3,1,2,3], k = 2;
console.log(containsNearbyDuplicate(nums, k)); //output: false

