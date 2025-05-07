/**
 * 
 * Given the root of a binary tree, invert the tree, and return its root.

 

Example 1:


Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
Example 2:


Input: root = [2,1,3]
Output: [2,3,1]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
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
 * @return {TreeNode}
 */

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * Inverts a binary tree
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    
    // Swap left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // Recursively invert subtrees
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};

// Helper function to convert tree to array (for visualization)
function treeToArray(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }
    // Trim trailing nulls
    while (result[result.length - 1] === null) {
        result.pop();
    }
    return result;
}

// Test Case 1
const root1 = new TreeNode(4);
root1.left = new TreeNode(2);
root1.right = new TreeNode(7);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

console.log("Original Tree (Level Order):", treeToArray(root1));
const inverted1 = invertTree(root1);
console.log("Inverted Tree (Level Order):", treeToArray(inverted1));
// Expected Output: [4,7,2,9,6,3,1]

// Test Case 2
const root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(3);

console.log("\nOriginal Tree (Level Order):", treeToArray(root2));
const inverted2 = invertTree(root2);
console.log("Inverted Tree (Level Order):", treeToArray(inverted2));
// Expected Output: [2,3,1]

// Test Case 3 (Empty Tree)
const root3 = null;
console.log("\nOriginal Tree (Level Order):", treeToArray(root3));
const inverted3 = invertTree(root3);
console.log("Inverted Tree (Level Order):", treeToArray(inverted3));
// Expected Output: []