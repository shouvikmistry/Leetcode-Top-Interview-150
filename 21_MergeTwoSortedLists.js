/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0); // Dummy node to simplify the merging process
    let current = dummy; // Pointer to the current node in the merged list

    // Traverse both lists and merge them in sorted order
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1; // Link the smaller node to the merged list
            list1 = list1.next; // Move to the next node in list1
        } else {
            current.next = list2; // Link the smaller node to the merged list
            list2 = list2.next; // Move to the next node in list2
        }
        current = current.next; // Move to the next node in the merged list
    }

    // If there are remaining nodes in either list, link them to the merged list
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next; // Return the head of the merged linked list (skipping the dummy node)
};
// Test case 1
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList = mergeTwoLists(list1, list2);
let result = [];

while (mergedList) {
    result.push(mergedList.val);
    mergedList = mergedList.next;
}

console.log(result); // Output: [1,1,2,3,4,4]