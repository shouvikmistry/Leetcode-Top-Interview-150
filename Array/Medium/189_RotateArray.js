/**
 * 
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?

 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//Brute Force Approach
// Time Complexity: O(n*k) where n is the length of the array and k is the number of rotations
// Space Complexity: O(1) because we are not using any extra space except for a few variables
var rotate = function (nums, k) {
    let count = 0;
    let temp;
    while (count < k) {
        for (let i = nums.length - 1; i > 0; i--) {
            temp = nums[i];
            nums[i] = nums[i - 1];
            nums[i - 1] = temp;
        }
        count++;
    }

    // return nums;
    console.log(nums);

};

// Example usage:
let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
rotate(nums, k);
