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
    console.log(`Storing ${value} at index ${arrayIndex}`);
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
      if (current.getNextNode() === null) {
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

  // retrieve method -> input: key output: value
  retrieve(key) {
    // store the hashed key in the constant arrayIndex
    const arrayIndex = this.hash(key);
    // store the head node of a list in the variable current
    let current = this.hashmap[arrayIndex].head;
    // while there is a valid node
    while (current !== null) {
      // if the current node's key matches the key
      if (current.data.key === key) {
        // return the current node's value
        console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`);
        return current.data.value;
      }
      // while key doesn't match : set current to the next node in the list, traverse
      current = current.next;
    }
    // if current turns out to be null, without finding the matched key:
    // exit the while-loop and return null
    return null;
  }
}


module.exports = HashMap;
