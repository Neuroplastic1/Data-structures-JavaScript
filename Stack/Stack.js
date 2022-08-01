const LinkedList = require("./LinkedList");

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  push(value) {
    this.stack.addToHead(value);
  }

  pop() {
    if (this.size > 0) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    } else {
      console.log("Stack is empty.");
    }
  }

  peek() {
    if (this.size > 0) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }
}

module.exports = Stack;
