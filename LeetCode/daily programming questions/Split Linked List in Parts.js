// 725. Split Linked List in Parts
// Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.

// The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

// The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

// Return an array of the k parts.

// Example 1:

// Input: head = [1,2,3], k = 5
// Output: [[1],[2],[3],[],[]]
// Explanation:
// The first element output[0] has output[0].val = 1, output[0].next = null.
// The last element output[4] is null, but its string representation as a ListNode is [].

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  // Step 1: Calculate the length of the linked list
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  // Step 2: Determine the base size and extra nodes
  let partSize = Math.floor(length / k); // Base size of each part
  let extraNodes = length % k; // The first 'extraNodes' parts get one extra node

  // Step 3: Split the linked list
  let result = new Array(k).fill(null); // Result array of k parts
  current = head; // Reset current to head

  for (let i = 0; i < k; i++) {
    if (current) {
      result[i] = current; // Start the new part
      let currentPartSize = partSize + (extraNodes > 0 ? 1 : 0); // Size of current part
      extraNodes--; // Use one of the extra nodes if available

      // Move to the end of the current part
      for (let j = 1; j < currentPartSize; j++) {
        current = current.next;
      }

      // Detach the current part from the rest of the list
      let nextPartHead = current.next; // Save the next part's head
      current.next = null; // Detach
      current = nextPartHead; // Move to the next part
    }
  }

  return result;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print linked list parts for easier visualization
function printLinkedListParts(parts) {
  return parts.map((part) => {
    const result = [];
    let current = part;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  });
}

// Example 1:
let head = createLinkedList([1, 2, 3]);
let k = 5;
let result = splitListToParts(head, k);
console.log(printLinkedListParts(result)); // Output: [[1],[2],[3],[],[]]
