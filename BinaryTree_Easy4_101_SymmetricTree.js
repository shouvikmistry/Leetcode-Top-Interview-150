/**
 * 
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
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var isSymmetric = function(root) {
    if (root === null) return true; // If the tree is empty, it is symmetric
    let elementQueue = [root.left, root.right]; // Initialize the queue with the left and right children of the root
    while (elementQueue.length > 0) {
        let leftNode = elementQueue.shift(); // Dequeue the first element
        let rightNode = elementQueue.shift(); // Dequeue the second element
        if (leftNode === null && rightNode === null) continue; // Both are null, continue to next iteration
        else if (leftNode === null || rightNode === null || leftNode.val !== rightNode.val) return false; // One is null, the other is not, return false
        // Enqueue the left and right children of both trees in reverse order
        elementQueue.push(leftNode.left);
        elementQueue.push(rightNode.right);
        elementQueue.push(leftNode.right);
        elementQueue.push(rightNode.left);
        
    }
    return true; // If all nodes are symmetric, return true
};
//Input
let root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));
console.log(isSymmetric(root)); // Output: true