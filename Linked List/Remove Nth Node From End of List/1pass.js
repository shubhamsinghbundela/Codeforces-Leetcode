const linkedList = new MyLinkedList();
// linkedList.addAtHead(6);
linkedList.addAtHead(5);
linkedList.addAtHead(4);
linkedList.addAtHead(3);
// linkedList.addAtHead(6);
linkedList.addAtHead(2);
linkedList.addAtHead(1);

const output = linkedList;
// console.log("output", output);

function newNode(val) {
  return {
    val: val,
    next: null,
  };
}
var removeNthFromEnd = function (head, n) {
  let dummyNode = newNode();
  dummyNode.next = head;
  let slow = dummyNode;
  let fast = dummyNode;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  // console.log(fast);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  // console.log("slow", slow);
  // console.log("fast", fast);
  slow.next = slow.next.next;
  return dummyNode.next;
};

const output1 = removeNthFromEnd(output.head, 2);
console.log("output1", output1);
