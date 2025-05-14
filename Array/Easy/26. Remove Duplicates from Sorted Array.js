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
var removeDuplicates = function(nums) {
    let ptr = 0;//Pointer to the first element of the array
    let k =1;//Counter for the number of unique elements
    //Loop through the array itterating through the elements
    for (let i  = 0; i  < nums.length; i ++) {
        //Check if the current element is not equal to the element at the pointer
        if (nums[i] !=nums[ptr]) {
            //If not equal, increment the pointer and assign the current element to the pointer position
            ptr++;
            nums[ptr]=nums[i];//Assign the current element to the pointer position
            k++;//Increment the counter for the number of unique elements
        }
    }
    //Return the number of unique elements
    // return k;
    return ptr + 1; // Return the length of the unique elements
    // return nums.slice(0, k); // Return the unique elements in the array
};

let nums = [1,1,2];
let nums2 = [0,0,1,1,1,2,2,3,3,4];


console.log(nums);
removeDuplicates(nums);
console.log(nums2);
removeDuplicates(nums2);

// let newLength1 = removeDuplicates(nums);
// console.log(`Updated Array 1: ${nums.slice(0, newLength1)}`);
// let newLength2 = removeDuplicates(nums2);
// console.log(`Updated Array 2: ${nums2.slice(0, newLength2)}`);
