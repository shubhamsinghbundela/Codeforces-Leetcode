class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  node(val) {
    return {
      val: val,
      next: null,
    };
  }

  get(index) {
    if (index < -1 || index >= this.size) {
      return -1;
    }
    if (this.head === null) {
      return -1;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

  addAtHead(val) {
    let node = this.node(val);
    node.next = this.head;
    this.head = node;
    this.size += 1;
  }

  addAtTail(val) {
    if (this.head == null) {
      this.addAtHead(val);
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      let node = this.node(val);
      current.next = node;

      this.size += 1;
    }
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index == 0) {
      this.addAtHead(val);
    } else if (index == this.size) {
      this.addAtTail(val);
    } else {
      if (this.head === null) {
        this.addAtHead(val);
        return;
      }
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      let node = this.node(val);
      node.next = current.next;
      current.next = node;
      this.size += 1;
    }
  }

  deleteAtIndex(index) {
    if (index < -1 || index >= this.size) {
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }
}

const linkedList = new MyLinkedList();

linkedList.addAtHead(4);
linkedList.addAtHead(3);
linkedList.addAtHead(2);
linkedList.addAtHead(1);

const output = linkedList;
// console.log("output", output);
