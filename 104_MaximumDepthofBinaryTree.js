/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
 * 
 * Definition for a binary tree node.
*/
/**
 * @param {TreeNode} root
 * @return {number}
*/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
var maxDepth = function (root) {
    if (root === null) return 0; // Handle the case where the root is null
    let elementQueue = [root]; // Initialize the queue with the root node
    let numberOfNodesInCurrentLevel = 0; // Number of nodes in the current level
    while (true) {
        let nodeCountAtCurrentLevel = elementQueue.length; // Get the number of nodes at the current level
        if (nodeCountAtCurrentLevel === 0) {
            return numberOfNodesInCurrentLevel; // If there are no nodes, return the count
        }

        while (nodeCountAtCurrentLevel > 0) {
            let element = elementQueue.shift(); // Dequeue the first node
            if (element.left !== null)
                elementQueue.push(element.left); // Enqueue the left child if it exists
            if (element.right !== null)
                elementQueue.push(element.right); // Enqueue the right child if it exists
            nodeCountAtCurrentLevel--; // Decrease the count of nodes at the current level
        }
        numberOfNodesInCurrentLevel++; // Increase the count of levels
    }
};
// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(maxDepth(root)); // Output: 3 (the depth of the tree)