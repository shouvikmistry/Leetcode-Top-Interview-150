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
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    // Brute force approach: O(n^2) time complexity
    for (let i = 0; i <nums.length; i++) {
        for(let j = i+1; j <nums.length; j++){
            if (nums[i]+nums[j]==target) {
                return [i,j];
            }
        }
    }
    
    // Optimized approach: O(n) time complexity
    //using hashmap to store the indices of the elements
    let map = new Map();//using map to store the indices of the elements
    //iterating through the array and checking if the complement of the current element exists in the map
    for (let i = 0; i < nums.length; i++) {//iterating through the array and checking if the complement of the current element exists in the map
        //complement is the difference between the target and the current element
        let complement = target - nums[i];//complement is the difference between the target and the current element
        //if the complement exists in the map, return the indices of the current element and the complement
        if (map.has(complement)) {
            //if the complement exists in the map, return the indices of the current element and the complement
            return [map.get(complement), i];//returning the indices of the current element and the complement
        }
        map.set(nums[i], i);//adding the current element and its index to the map
        //console.log(map);//printing the map to check the elements and their indices
    }

    return [];//returning an empty array if no solution is found
}
//input: nums = [2,7,11,15], target = 9
let nums = [2,7,11,15], target = 9;
console.log(twoSum(nums, target)); //Output: [0,1]
// input: nums = [3,2,4], target = 6
nums = [3,2,4], target = 6;
console.log(twoSum(nums, target)); //Output: [1,2]
//input: nums = [3,3], target = 6
nums = [3,3], target = 6;
console.log(twoSum(nums, target)); //Output: [0,1]
