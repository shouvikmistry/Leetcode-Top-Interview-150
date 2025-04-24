/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
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

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).


Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
*/
#include <bits/stdc++.h>

using namespace std;
class Solution
{
public:
    int removeDuplicates(vector<int> &nums)
    {
        int ptr = 0;
        int k = 1;
        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] != nums[ptr])
            {
                ptr++;
                nums[ptr] = nums[i];
                k++;
            }
        }
        // return k;
        return ptr + 1;
    }
};
int main()
{
    Solution s; //create an object of the class Solution
    vector<int> nums = {};//create an empty vector of integers
    nums = {1, 1, 2};
    // nums = {0,0,1,1,1,2,2,3,3,4};
    for (int i = 0; i < nums.size(); i++)//print the elements of the vector
    {
        cout << nums[i] << " ";
    }
    cout << endl;
    int k = s.removeDuplicates(nums);//call the removeDuplicates function and store the result in k
    cout << "The number of unique elements in the array is: " << k << endl;
    cout << "k: " << k << endl; //print the value of k
    cout << "Array with unique elements: ";
    for (int i = 0; i < k; i++)
    {
        cout << nums[i] << " "; //print each unique element in the array
    }
    return 0;
}
// Time Complexity: O(n)