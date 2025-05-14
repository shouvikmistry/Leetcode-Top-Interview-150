#include <iostream>
#include <vector>
using namespace std;

int removeElements(vector<int>& nums, int val) {
    int n = nums.size();
    int f = 0;
    int s = n - 1;
    int k = 0;

    while (f <= s) {
        if (nums[s] == val) {
            s--;
        } else {
            int temp = nums[f];
            nums[f] = nums[s];
            nums[s] = temp;
            f++;
        }
    }

    for (int i = 0; i < n; i++) {
        if (nums[i] != val) {
            k++;
        }
    }
    return k;
}

int main() {
    vector<int> nums = {0,1,0,3,12};
    int val = 0;

    // Call the function and store the result
    int newLength = removeElements(nums, val);

    // Print the result
    for (int i = 0; i < newLength; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;
    // Print the entire array after modification
    cout << "Modified array: ";
    for (int i = 0; i < nums.size(); i++) {
        cout << nums[i] << " ";
    }
    cout << endl;

    return 0;
}