const BinaryTree = require('./BinaryTree');

// create a BinaryTree
const bt = new BinaryTree(100);

// insert values to the BinaryTree
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);

// search for value 75 in BinaryTree
let node = bt.getNodeByValue(75);
console.log(node);

// search for a non-existent value in BinaryTree
node = bt.getNodeByValue(55);
console.log(node);

/* logs:
BinaryTree { value: 75, depth: 3, left: null, right: null }
null
*/
