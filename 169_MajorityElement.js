/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

//Boyer-Moore Voting Algorithm
//Time Complexity: O(n)
//Space Complexity: O(1)
let maxElement =  nums[0];
let count = 1; // Renamed from maxN

for (let i = 1; i < nums.length; i++) {
    if (maxElement == nums[i]) {
        count++; // Updated variable name
    }else if(count == 0){
        maxElement = nums[i]
        count = 1; // Reset count
    }
    else {
        count--; // Updated variable name
    }
}
return maxElement;

//--------------------------------------------------------------
//Sorting Method
//Time Complexity: O(nlogn)
//Space Complexity: O(1)

nums.sort((a,b) =>a-b);
return nums[Math.floor(nums.length/2)];
//Math.floor(3/2==1.5) = 1 nearest int value

};

let nums = [6,5,5,]
console.log(majorityElement(nums)); 