/**
 *
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.



Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).


Constraints:

1 <= nums.length <= 3 * 10^4
-10^4 <= nums[i] <= 10^4
nums is sorted in non-decreasing order.
 *
 * @param {number[]} nums
 * @return {number}
 */
#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        int l = 0, r = 0, n = nums.size();
        while (r < n)
        {
            int count = 1;
            while (r + 1 < n and nums[r] == nums[r + 1])
            {
                r += 1;
                count += 1;
            }
            int range = min(2, count);
            for (int i = 0; i < range; i++)
            {
                nums[l] = nums[r];
                l += 1;
            }
            r += 1;
        }

        for (auto num : nums)
        {

            cout << num << " ";
        }
        cout << "ptr :" << l << endl;

        return l;
    }

    // Another Logic
    int removeDuplicates2(vector<int> &nums)
    {

        int i = 0;
        for (int n : nums)
        {
            if (i < 2 || n != nums[i - 2])
            {
                nums[i++] = n;
            }
        }
        return i;
    }
};

int main()
{
    Solution sol;
    // vector<int> nums = {1,1,1,2,2,3};
    // Try other inputs:
    vector<int> nums = {0, 0, 1, 1, 1, 1, 2, 3, 3};
    nums = {1, 1, 1, 2, 2, 2, 3, 3};
    // vector<int> nums = {1, 0, 1, 2};
    // vector<int> nums = {1, 2, 3, 4, 5};
    // vector<int> nums = {0};
    // vector<int> nums = {};

    cout << " Brute Force: " << sol.removeDuplicates(nums) << endl;
    // cout << " Sorted + Nested Loops: " << sol.longestConsecutiveSortedNestedLoops(nums) << endl;
    // cout << "  Sorted + Linear: " << sol.longestConsecutiveSorted(nums) << endl;
    // cout << " HashSet Optimized: " << sol.longestConsecutiveHashSet(nums) << endl;
    // cout << " HashMap Version: " << sol.longestConsecutiveHashMap(nums) << endl;

    return 0;
}