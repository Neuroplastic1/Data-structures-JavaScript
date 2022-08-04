const LinkedList = require('./LinkedList');
const Node = require('./Node');

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size)
      .fill(null)
      .map(() => new LinkedList());
  }
  // hash method -> input: key output: arrayIndex
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  // .assign() will handle the logic needed to take in a key-value pair
  // and store the value at a particular index.
  assign(key, value) {
    // store the hashed key in a variable arrayIndex
    const arrayIndex = this.hash(key);
    // store linked list at arrayIndex: in a variable linkedList
    const linkedList = this.hashmap[arrayIndex];
    // if linked list is empty add the key-value pair to the linked list as a node
    if (linkedList.head === null) {
      linkedList.addToHead({
        key,
        value
      });
      return;
    }
    // store the head node of the linked list in a variable current
    let current = linkedList.head;
    // while there is a current node
    while (current) {
      // if the current node's key is the same as the key
      if (current.data.key === key) {
        // store the key and value in current
        current.data = {
          key,
          value
        };
      }
      // if the current node is the tail node
      if (!current.getNextNode()) {
        // create and store the key-value pair in the node after current
        const newNode = new Node({
          key,
          value
        });
        current.setNextNode(newNode);
        //  exit the loop
        break;
      }
      // set current to the next node
      current = current.getNextNode();
    }
  }
}
}

// retrieve method -> input: key output: value
retrieve(key) {
  const arrayIndex = this.hash(key);
  return this.hashmap[arrayIndex]
}

}

// test: retrieve()
const glossary = new HashMap(3)
glossary.assign('semordnilap', 'Words that form different words when reversed')
console.log(glossary.retrieve('semordnilap'))

module.exports = HashMap;
