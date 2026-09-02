var oddEvenList = function (head) {
  if (head == null) {
    return head;
  }
  let odd = head;

  let even = head.next;
  let evenStart = even;
  while (even && even.next) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
  }
  odd.next = evenStart;
  return head;
};
