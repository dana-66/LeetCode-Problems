// // 3217. Delete Nodes From Linked List Present in Array
// You are given an array of integers nums and the head of a linked list. Return the head of the modified linked list after removing all nodes from the linked list that have a value that exists in nums.

 

// Example 1:

// Input: nums = [1,2,3], head = [1,2,3,4,5]

// Output: [4,5]

// Explanation:



// Remove the nodes with values 1, 2, and 3.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    // Step 1: Convert nums array to a Set for O(1) lookups
  const numSet = new Set(nums);
  
  // Step 2: Create a dummy node to handle edge cases easily
  const dummy = new ListNode(0);
  dummy.next = head;
  
  // Step 3: Use two pointers to traverse the linked list
  let prev = dummy;
  let current = head;
  
  while (current !== null) {
      if (numSet.has(current.val)) {
          // Remove the current node by skipping it
          prev.next = current.next;
      } else {
          // Move the prev pointer forward if not removing the current node
          prev = current;
      }
      // Move to the next node
      current = current.next;
  }
  
  // Step 4: Return the modified linked list starting from dummy.next
  return dummy.next;
};