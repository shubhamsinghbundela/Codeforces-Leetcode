const linkedList = new MyLinkedList();
// linkedList.addAtHead(6);
// linkedList.addAtHead(5);
// linkedList.addAtHead(4);
// linkedList.addAtHead(3);
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
  let sizeOfLinkedList = 0;
  let current = head;
  let sentital = newNode();
  sentital.next = head;
  let prev = sentital;
  while (current) {
    current = current.next;
    sizeOfLinkedList += 1;
  }
  console.log("sizeOfLinkedList", sizeOfLinkedList);
  let prevPositionOfRemovingElement = sizeOfLinkedList - n;
  console.log("prevPositionOfRemovingElement", prevPositionOfRemovingElement);
  for (let i = 0; i < prevPositionOfRemovingElement; i++) {
    prev = prev.next;
  }
  // console.log("prev", prev);
  prev.next = prev.next.next;
  // console.log("prev", prev);
  return sentital.next;
};

const output1 = removeNthFromEnd(output.head, 1);
console.log("output1", output1);
