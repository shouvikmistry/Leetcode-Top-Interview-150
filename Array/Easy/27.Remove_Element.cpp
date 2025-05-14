#include <iostream>
#include <vector>
using namespace std;

class Solution {
    public:
        int removeElement(vector<int>& nums, int val) {
            int n = nums.size();
            int f = 0;
            int s = n - 1;
            int k = 0;   
            
            while (f <= s) {
                if (nums[s] == val) {
                    s--;
                } else {
                    int temp = nums[f];
                    nums[f]= nums[s];
                    nums[s]= temp;
                    f++;
                }
            }
        
            for (int i = 0; i < n; i++)
            {
                if(nums[i] != val){
                    k++;
                }
            }
            return k;
        }
};

int main() {
    Solution solution;
    vector<int> nums = {3, 2, 2, 3};
    int val = 3;

    int newLength = solution.removeElement(nums, val);
    for(int i = 0; i < newLength; i++)
    {
        cout << nums[i];
    }
    
    // cout << "New length: " << newLength << endl;
    // cout << endl;

    return 0;
}