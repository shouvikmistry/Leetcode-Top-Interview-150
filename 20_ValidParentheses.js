/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 * 
 * @param {string} s
 * @return {boolean}
 */
    var isValid = function (s) {

        //Another approach using stack
        // Time complexity: O(n)
        // Space complexity: O(n)
        // const stack = [];
        // for (const c of s) {
        //     if (c === '(') {
        //         stack.push(')');
        //     } else if (c === '{') {
        //         stack.push('}');
        //     } else if (c === '[') {
        //         stack.push(']');
        //     } else if (stack.length === 0 || stack.pop() !== c) {
        //         return false;
        //     }
        // }
        // return stack.length === 0;


    let stack = new Array();
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        } else {
            if (stack.length == 0) {
                return false;
            }
            let top = stack.pop();
            if ((s[i] == ')' && top != '(') || (s[i] == '}' && top != '{') || (s[i] == ']' && top != '[')) {
                return false;
            }
        }
    }
    return stack.length == 0;
};
// Example usage:
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false