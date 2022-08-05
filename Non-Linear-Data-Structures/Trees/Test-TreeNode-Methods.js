const TreeNode = require('./TreeNode');
const tree = new TreeNode(1);

tree.addChild(15);
const node = new TreeNode(30);
tree.addChild(node);
console.log(tree);

tree.removeChild(15);
console.log(tree);

tree.removeChild(node);
console.log(tree);
/* logs:
TreeNode {
  data: 1,
  children:
   [ TreeNode { data: 15, children: [] },
     TreeNode { data: 30, children: [] } ] }
TreeNode { data: 1, children: [ TreeNode { data: 30, children: [] } ] }
TreeNode { data: 1, children: [] }

*/
