var reverseList = function (head) {
  if (head == null) {
    return head;
  }
  let prev = null;
  let cur = head;
  while (cur && cur.next) {
    head = cur.next;
    cur.next = prev;
    prev = cur;
    cur = head;
  }
  cur.next = prev;
  prev = cur;
  return head;
};
