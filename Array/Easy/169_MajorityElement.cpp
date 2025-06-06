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
#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    int majorityElement(vector<int> &nums)
    {
        // Boyer-Moore Voting Algorithm
        // This algorithm works in O(n) time and O(1) space complexity.
        int maxElement = nums[0];
        int count = 1;
        for (int i = 1; i < nums.size(); i++)
        {
            if (maxElement == nums[i])
            {
                count++;
            }
            else if (count == 0)
            {
                maxElement = nums[i];
                count = 1;
            }
            else
            {
                count--;
            }
        }
        return maxElement;

        
//--------------------------------------------------------------------------------------
        //Sorting Method
        // time complexity O(nlogn) and space complexity O(1)

        sort(nums.begin(), nums.end());
        return nums[nums.size() / 2]; // The majority element will always be at the middle after sorting
    }
};

int main()
{
    Solution s;
    vector<int> nums = {3, 2, 3};
    nums = {2, 2, 1, 1, 1, 2, 2};
    nums = {6, 5, 5};
    cout << s.majorityElement(nums) << endl;
    return 0;
}
