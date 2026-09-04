var addTwoNumbers = function (l1, l2) {
  let first = l1;
  let second = l2;
  let rem = 0;
  let carry = 0;
  let headC = null;
  let cur = headC;

  while (first || second) {
    let sum = (first ? first.val : 0) + (second ? second.val : 0) + carry;
    rem = Math.floor(sum % 10);
    if (headC == null) {
      let newNode = new ListNode(rem);
      headC = newNode;
      cur = headC;
    } else {
      let newNode = new ListNode(rem);
      cur.next = newNode;
      cur = cur.next;
    }
    carry = Math.floor(sum / 10);
    first = first ? first.next : null;
    second = second ? second.next : null;
  }
  return headC;
};
