/**
 * 
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 

Constraints:

The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var isSameTree = function (p, q) {
    let elementQueue = [p, q]; // Initialize the queue with both trees
    while(elementQueue.length > 0){
        let firstElement = elementQueue.shift(); // Dequeue the first element
        let secondElement = elementQueue.shift(); // Dequeue the second element
        if (firstElement === null && secondElement === null) continue; // Both are null, continue to next iteration
        else if (firstElement === null || secondElement === null || firstElement.val !== secondElement.val ) return false; // One is null, the other is not, return false
        // Enqueue the left and right children of both trees
        elementQueue.push(firstElement.left);
        elementQueue.push(secondElement.left);
        elementQueue.push(firstElement.right);
        elementQueue.push(secondElement.right);
    }
    return true; // If all nodes are the same, return true
};

// Example usage:
const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);
const q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);
console.log(isSameTree(p, q)); // Output: true

const p2 = new TreeNode(1);
p2.left = new TreeNode(2);
const q2 = new TreeNode(1);
q2.left = null;
q2.right = new TreeNode(2);
console.log(isSameTree(p2, q2)); // Output: false

const p3 = new TreeNode(1);
p3.left = new TreeNode(2);
p3.right = new TreeNode(1);
const q3 = new TreeNode(1);
q3.left = new TreeNode(1);
q3.right = new TreeNode(2);
console.log(isSameTree(p3, q3)); // Output: false
const p4 = new TreeNode(1);
p4.left = new TreeNode(2);
p4.left.left = new TreeNode(3);
const q4 = new TreeNode(1);
q4.right = new TreeNode(2);
q4.left = new TreeNode(null);
q4.left.left = new TreeNode(3);
console.log(isSameTree(p4, q4)); // Output: false