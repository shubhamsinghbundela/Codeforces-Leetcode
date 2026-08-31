var getIntersectionNode = function (headA, headB) {
  let set = new Set();

  while (headA) {
    set.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (set.has(headB)) {
      return headB;
    }
    set.add(headA);
    headB = headB.next;
  }
  return null;
};
