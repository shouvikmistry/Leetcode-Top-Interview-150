/**
 * 📌 Problem: Longest Consecutive Sequence
 *
 * Given an unsorted array of integers `nums`, return the length of the longest
 * consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * 🧪 Examples:
 * Input:  nums = [100, 4, 200, 1, 3, 2]
 * Output: 4 // because the sequence [1, 2, 3, 4] is the longest
 *
 * Input:  nums = [0,3,7,2,5,8,4,6,0,1]
 * Output: 9 // because the sequence [0,1,2,3,4,5,6,7,8] is the longest
 *
 * Constraints:
 * - 0 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 *
 * @param {number[]} nums
 * @return {number}
 */
#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    //  Brute Force O(n^3) – checks each possible sequence manually
    int longestConsecutive(vector<int> &nums)
    {
        int maxLen = 0;

        for (int i = 0; i < nums.size(); i++)
        {
            int current = nums[i];
            int count = 1;

            while (true)
            {
                bool found = false;
                //  Check if next consecutive number exists( if current + 1 exists in the array )
                for (int j = 0; j < nums.size(); j++)
                {
                    if (nums[j] == current + 1)
                    {
                        found = true;
                        current++;
                        count++;
                        break; // move to check for next number
                    }
                }

                if (!found)
                    break; // exit loop if next number is not found
            }

            maxLen = max(maxLen, count);
        }

        return maxLen;
    }

    //  Brute Force O(n^3) using a linear search function
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

    //  O(n^2) – Sorts and checks each sequence and nested loops
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

    //  Optimized O(n log n) – Sorts the array and skips duplicates
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
                continue; //  Skip duplicates
            }
            else if (nums[i] + 1 == nums[i + 1])
            {
                currentLen++;
            }
            else
            {
                currentLen = 1; //  Reset count
            }

            maxLen = max(maxLen, currentLen);
        }

        return maxLen;
    }
    // Optimal O(n) using a HashMap to track visited nodes
    /*
     Additional Notes:
            unordered_map<int, bool> is only needed if you must track visited status explicitly (like in BFS, DFS, or backtracking problems).

            In this problem, you don’t need to mark visited—you can just start from the beginning of each sequence.
    */
    int longestConsecutiveHashMap(vector<int> &nums)
    {
        if (nums.empty())
            return 0;
        int maxLen = 0;

        unordered_map<int, bool> setMap;
         // Mark all numbers as unvisited
        for (auto n : nums)
        {
            setMap[n] = false;
        }

        for (auto num : nums)
        {
            int currentLen = 1;
            int nextNum = num + 1;
            if (setMap[num])
                continue;
            setMap[num] = true;
            // Expand to next
            while (setMap.find(nextNum) != setMap.end() && setMap[nextNum] == false)
            {
                currentLen++;
                setMap[nextNum] = true; // Mark as visited
                nextNum++;
            }
            // Expand to previous
            int prevNum = num - 1;
            while (setMap.find(prevNum) != setMap.end() && setMap[nextNum] == false)
            {
                currentLen++;
                setMap[nextNum] = true; // Mark as visited
                prevNum--;
            }
            maxLen = max(maxLen, currentLen);
        }
        return maxLen;
    }
    //  Optimal O(n) using a HashSet to avoid duplicates and re-checking
    //  O(n) – Cleanest approach using unordered_set
    int longestConsecutiveHashSet(vector<int> &nums)
    {
        if (nums.empty())
            return 0;
        int maxLen = 0;

        //  unordered_set<int> setMap;
        //  for (int i = 0; i < nums.size(); i++)
        //  {
        //      setMap.insert(nums[i]);
        //  }
        // same as below initazation

        unordered_set<int> setMap(nums.begin(), nums.end());
        /*
          Why we use a set:
         - Removes duplicates automatically
         - Allows O(1) lookup time for checking existence of a number
        */

        /* for (int i = 0; i <= setMap.size(); i++)
        |         Issue         |                   Fix                   |
        | -- -- -- -- -- -- -- -| -- -- -- -- -- -- -- -- - -- -- -- -- --|
        | `i <= setMap.size()`  | ❌ causes out - of - bounds             |
        | Use `i < nums.size()` | ✅ safe since you're indexing `nums[i]` |
        */

        // for (int i = 0; i < nums.size(); i++)

        for (auto num : setMap)
        /*
         Why This is Better:
            for (int num : setMap) avoids duplicate work (e.g., avoids going over 2 if you already handled 1 → 100)
            Avoids using nums[i] indexing at all
        */
        {

            // Start only if the previous number isn't in the set
            if (setMap.find(num - 1) == setMap.end())
            {
                int x = num;
                int currentLen = 1;
                //  Check for all next consecutive numbers
                while (setMap.find(x + 1) != setMap.end())
                {
                    x++;
                    currentLen++;
                }

                maxLen = max(maxLen, currentLen);
            }
        }
        return maxLen;
    }
};

int main()
{
    Solution sol;
    vector<int> nums = {100, 4, 200, 1, 3, 2};
    // Try other inputs:
    // vector<int> nums = {0, 3, 7, 2, 5, 8, 4, 6, 0, 1};
    // vector<int> nums = {1, 0, 1, 2};
    // vector<int> nums = {1, 2, 3, 4, 5};
    // vector<int> nums = {0};
    // vector<int> nums = {};

    cout << " Brute Force: " << sol.longestConsecutiveBruteForce(nums) << endl;
    cout << " Sorted + Nested Loops: " << sol.longestConsecutiveSortedNestedLoops(nums) << endl;
    cout << "  Sorted + Linear: " << sol.longestConsecutiveSorted(nums) << endl;
    cout << " HashSet Optimized: " << sol.longestConsecutiveHashSet(nums) << endl;
    cout << " HashMap Version: " << sol.longestConsecutiveHashMap(nums) << endl;

    return 0;
}