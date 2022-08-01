const LinkedList = require('./LinkedList');

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }

  peek() {
    return this.stack.head.data;
  }
}

module.exports = Stack;
