const Node = require('./Node');

//created three nodes
const strawberryNode = new Node('Berry Tasty')
const vanillaNode = new Node('Vanilla')
const coconutNode = new Node('Coconuts for Coconut')
//put in order
//van then strw then coco
vanillaNode.setNextNode(strawberryNode)
strawberryNode.setNextNode(coconutNode)

let currentNode = vanillaNode;
while (currentNode !== null) {
  console.log(currentNode.data)
  currentNode = currentNode.next;
}

/* should log
Vanilla
Berry Tasty
Coconuts for Coconut
undefined
*/
