var hasCycle = function (head) {
  let current = head;
  let set = new Set();
  if (current) {
    set.add(current);
  }
  while (current && current.next) {
    if (set.has(current.next)) {
      return true;
    } else {
      current = current.next;
      set.add(current);
    }
  }
  return false;
};
