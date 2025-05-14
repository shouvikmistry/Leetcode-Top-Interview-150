
var removeElements = function (nums , val) {
    let n = nums.length;
    let f = 0;
    let s = n - 1;
    let k = 0;   
    while (f <= s) {
        
        // console.log(nums);
        // console.log(`1st^${f} 2nd^${s}`);
        if (nums[s] == val) {
            s--;
        } else {
            let temp = nums[f];
            // console.log(`Temp:${temp}`);
            nums[f]= nums[s];
            nums[s]= temp;
            // console.log(`Temp:${temp}`);
            f++;
        }
    }
    nums.forEach(e => {
        if(e != val){
            k++;
        }
    });
    // console.log(nums.length);
    console.log(nums);
    return k;
    
};
// let nums1 = [-4, -1, 0, 3, 10];
// let nums2 = [-7, -3, 2, 3, 11];
let nums = [3,2,2,3];
let nums2 = [0,1,2,2,3,0,4,2];

// console.log(nums.length);
console.log(removeElements(nums,3));
console.log(removeElements(nums2,2));
// console.log(nums);
// console.log(nums2);
// console.log(nums2,sortedSquares(nums2));
// console.log(nums1,sortedSquares(nums1));
console.log(typeof removeElements);

