class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null);
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
    // arrayIndex with the value of the hashed and compressed key.
    const arrayIndex = this.hash(key)
    // Assign the value to the element at the index derived from hashing, arrayIndex
    this.hashmap[arrayIndex] = value
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
