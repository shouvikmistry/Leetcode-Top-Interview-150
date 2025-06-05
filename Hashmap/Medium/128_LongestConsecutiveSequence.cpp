/**
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
Example 3:

Input: nums = [1,0,1,2]
Output: 3
 

Constraints:

0 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
 *
 * @param {number[]} nums
 * @return {number}
 */
#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    int longestConsecutive(vector<int> &nums)
    {
         sort(nums.begin(), nums.end());
        int result = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            for (int j = i + 1; j < nums.size(); j++)
            {

                if (nums[i] + 1 != nums[j])
                {
                    return result;
                }
                result++;
            }
        }
    }
};

// Brute Force O(n^3) solution
class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        int maxLen = 0;

        for (int i = 0; i < nums.size(); i++) {
            int current = nums[i];
            int count = 1;

            while (true) {
                bool found = false;

                // Check if current + 1 exists in the array
                for (int j = 0; j < nums.size(); j++) {
                    if (nums[j] == current + 1) {
                        found = true;
                        current++;
                        count++;
                        break; // move to check for next number
                    }
                }

                if (!found) break; // exit loop if next number is not found
            }

            maxLen = max(maxLen, count);
        }

        return maxLen;
    }
};

int main()
{
    Solution sol;
    vector<int> nums = {100, 4, 200, 1, 3, 2};
    int result = sol.longestConsecutive(nums);
    cout << "Longest consecutive sequence length: " << result << endl;
    return 0;
}