class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null);
  }

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

}

// test:
// store a new instance of HashMap with a size of 3
const employees = new HashMap(3)
// Assign employees the key-value pair '34-567' and 'Mara'
employees.assign('34-567', 'Mara')
// log the hash map
// The hash map’s array can be accessed through the .hashmap property
console.log(employees.hashmap)  // logs: [ null, 'Mara', null ]

module.exports = HashMap;
