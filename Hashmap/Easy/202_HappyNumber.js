/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        //.add() adds the value to the set, if it doesn't already exist
        n = [...n.toString()];
        //n.toString() => converts the number to a string 19 => "19"
        //The spread operator (...) is used to convert the string into an array of characters ["1", "9"]
        //Alternatively, you can use n.toString().split("") to convert the string into an array of characters 19 => ["1", "9"]
        //[..."19"] => ["1", "9"]

        //["1", "9"].reduce((sum, digit) => sum + digit * digit, 0);
        //sum = 0, digit = "1" => sum + digit * digit = 0 + 1 * 1 = 1       

        n = n.reduce((sum, digit) => sum + digit * digit, 0);
        //js automatically converts the string to a number when performing arithmetic operations
        //The reduce function takes two arguments: the accumulator (sum) and the current value (digit)
        //The accumulator is initialized to 0 (the second argument to reduce)
        //The current value is the digit from the array
        //The function returns the sum of the squares of the digits
        
    }

    
    return n === 1;
};

// Test cases
console.log(isHappy(19)); // true
// console.log(isHappy(2));  // false