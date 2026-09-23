class MyStack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(x) {
    this.q1.push(x);
  }

  pop() {
    while (this.q1.length > 1) {
      let removeElement = this.q1.shift();
      this.q2.push(removeElement);
    }
    let topElement = this.q1.shift();
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return topElement;
  }

  top() {
    while (this.q1.length > 1) {
      let removeElement = this.q1.shift();
      this.q2.push(removeElement);
    }
    let topElement = this.q1.shift();
    this.q2.push(topElement);
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return topElement;
  }

  empty() {
    return this.q1.length === 0;
  }
}

// let myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// // console.log("myStack", myStack);
// let topElement = myStack.top(); // return 2
// // console.log(topElement);
// // console.log("myStack", myStack);
// let popElement = myStack.pop(); // return 2
// console.log(popElement);
// console.log("myStack", myStack);
// let isEmpty = myStack.empty(); // return False
// console.log(isEmpty);

let myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
let topElement = myStack.top();
console.log(topElement);
