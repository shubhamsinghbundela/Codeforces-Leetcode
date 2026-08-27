const linkedList = new MyLinkedList();

linkedList.addAtHead(4);
linkedList.addAtHead(3);
linkedList.addAtHead(2);
linkedList.addAtHead(1);

const output = linkedList;
// console.log("output", output);

var makeCycle = function (head, pos) {
  let index = 0;
  let current = head;
  let previous = head;
  while (current.next) {
    index += 1;
    current = current.next;
    if (index == pos) {
      previous = current;
    }
  }
  current.next = previous;
  return head;
};
const output1 = makeCycle(output.head, 1);

var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      return true;
    }
  }
  return false;
};

const output2 = hasCycle(output1);
console.log("output2", output2);
