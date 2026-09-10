/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let dummyNode = new ListNode();
  dummyNode.next = head;
  let prev = dummyNode;
  let current = head;
  let next = head.next;
  while (current && next) {
    prev.next = current.next;
    prev = current;
    current.next = next.next;
    current = current.next;
    next.next = prev;
    next = current && current.next;
  }
  return dummyNode.next;
};
