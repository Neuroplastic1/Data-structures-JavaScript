
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
      linkedList.addToHead({ key, value });
      return;
    }
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.getNextNode()) {
        const newNode = new Node({ key, value });
        current.setNextNode(newNode);
        break;
      }
      current = current.getNextNode();
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
glossary.assign('semordnilap','Words that form different words when reversed')
console.log(glossary.retrieve('semordnilap'))

module.exports = HashMap;
