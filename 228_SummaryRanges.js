/**
 * You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
Example 2:

Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
 

Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.

 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    if (nums.length==0) {
        return result;
    }
    for (let i = 0; i < nums.length;) {
        let left = i,right = i;
        while (nums[right+1]==nums[right]+1 && right+1<nums.length)//Purpose of the Check:
        // Prevents accessing nums[right + 1] when right is at the last index.
        // Ensures the loop stops safely at the array’s end.
        // Why It’s Essential:
        // Without this check, the code would try to access an index that doesn't exist, causing an error.
        // Without it, the code crashes for arrays where the last element is part of a single-number
         {
            right++;
        }
        if (right>left) {
            result.push(nums[left].toString() +"->"+ nums[right].toString());
        }else{
            result.push(nums[left].toString());
        }
        i = right+1;
    }
    return result;
};
/*
Time complexity: O(n)
//Why the Algorithm is O(n) (Not O(n²))
Your observation is correct that two nested loops often imply O(n²) time complexity. However, in this case, the inner while loop doesn't reset the outer loop's index (i). Instead, it jumps ahead to right + 1, ensuring each element is processed exactly once.
//space complexity: O(1)
The space complexity is O(1) because we are using a fixed amount of space for variables regardless of the input size.
*/
//Example 1
let nums = [0,1,2,4,5,7];
nums = [0,2,3,4,6,8,9];
console.log(summaryRanges(nums)); //Output: ["0->2","4->5","7"]