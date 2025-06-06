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
    
class Solution {
    public:
    
    // Brute Force O(n^3) solution
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
    // Brute Force O(n^3) solution with linear search
    // This function performs a linear search to check if a number exists in the array.
    bool linearSearch(vector<int> arr, int num)
    {
        for (int i = 0; i < arr.size(); i++)
        {
            if (arr[i] == num)
            {
                return true;
            }
        }
        return false;
    }
    int longestConsecutiveBruteForce(vector<int> &nums)
    {
        int maxLen = 0;

        for (int i = 0; i < nums.size(); i++)
        {
            int x = nums[i];
            int currentLen = 1;
            while (linearSearch(nums, x + 1) == true)
            {
                x = x + 1;
                currentLen = currentLen + 1;
            }
            maxLen = max(maxLen, currentLen);
        }
        return maxLen;
    }

    // Brute Force O(n^2) solution with sorting and nested loops
    int longestConsecutiveSortedNestedLoops(vector<int> &nums)
    {
        int maxLen = 0;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < nums.size(); i++)
        {
            int current = nums[i];
            int count = 1;

            for (int j = i + 1; j < nums.size(); j++)
            {
                if (nums[j] == current + 1)
                {
                    count++;
                    current++;
                }
            }
            maxLen = max(maxLen, count);
        }
        return maxLen;
    }

    // Optimized O(n log n) solution sorting the array skipping duplicates
    int longestConsecutiveSorted(vector<int> &nums)
    {
        if (nums.empty())
            return 0;

        sort(nums.begin(), nums.end());

        int maxLen = 1;
        int currentLen = 1;

        for (int i = 0; i < nums.size() - 1; i++)
        {
            if (nums[i] == nums[i + 1])
            {
                continue; // skip duplicates
            }
            else if (nums[i] + 1 == nums[i + 1])
            {
                currentLen++;
            }
            else
            {
                currentLen = 1; // reset current length
            }

            maxLen = max(maxLen, currentLen);
        }

        return maxLen;
    }
};

int main()
{
    Solution sol;
    vector<int> nums = {100, 4, 200, 1, 3, 2};
    // nums = {0, 3, 7, 2, 5, 8, 4, 6, 0, 1};
    // nums = {1, 0, 1, 2};
    // nums = {1, 2, 3, 4, 5};
    int result = sol.longestConsecutiveBruteForce(nums);
    cout << "Longest consecutive sequence length: " << result << endl;
    result = sol.longestConsecutiveSortedNestedLoops(nums);
    cout << "Longest consecutive sequence length with nested loops: " << result << endl;
    result = sol.longestConsecutiveSorted(nums);
    cout << "Longest consecutive sequence length with sorting: " << result << endl;
    return 0;
}