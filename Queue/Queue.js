const LinkedList = require('./Singly-LinkedList');

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.size = 0;
  }

  enqueue(data) {
    this.queue.addToTail(data)
    this.size = this.size + 1
    console.log(`Added ${data}! Queue size is now ${this.size}`)
  }
}

module.exports = Queue;
