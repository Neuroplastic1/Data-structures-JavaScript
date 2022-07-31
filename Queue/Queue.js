const LinkedList = require('./Singly-LinkedList');

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.size = 0;
    this.maxSize = maxSize;
  }

  hasRoom() {
    return this.size < this.maxSize
  }

  isEmpty() {
    return this.size === 0
  }
  
  enqueue(data) {
    this.queue.addToTail(data)
    this.size = this.size + 1
    console.log(`Added ${data}! Queue size is now ${this.size}`)
  }

  dequeue() {
    const data = this.queue.removeHead();
    this.size--;
    console.log(`Removed ${data}! Queue size is ${this.size}.`)
  }
}

module.exports = Queue;
