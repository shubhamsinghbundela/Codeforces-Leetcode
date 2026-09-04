var mergeTwoLists = function (list1, list2) {
  let dummyNode = new ListNode();
  let smallestElement = dummyNode;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      smallestElement.next = list1;
      smallestElement = list1;
      list1 = list1.next;
    } else {
      smallestElement.next = list2;
      smallestElement = list2;
      list2 = list2.next;
    }
  }

  if (list1) {
    smallestElement.next = list1;
  }

  if (list2) {
    smallestElement.next = list2;
  }

  return dummyNode.next;
};
