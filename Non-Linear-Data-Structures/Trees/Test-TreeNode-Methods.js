const TreeNode = require('./TreeNode');
const tree = new TreeNode(1);
const randomize = () => Math.floor(Math.random() * 20);

// add first-level children
for (let i = 0; i < 3; i++) {
  tree.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    tree.children[i].addChild(randomize());
  }
}

// add third-level children
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      tree.children[i].children[j].addChild(randomize());
    }
  }
}

// pretty-print the tree
tree.print();
console.log(tree)

/* logs:
1
-- 19
-- -- 6
-- -- -- 7
-- -- -- 5
-- -- 19
-- -- -- 2
-- -- -- 15
-- 5
-- -- 5
-- -- -- 9
-- -- -- 7
-- -- 16
-- -- -- 14
-- -- -- 3
-- 5
-- -- 1
-- -- -- 7
-- -- -- 13
-- -- 14
-- -- -- 10
-- -- -- 3

TreeNode {
  data: 1,
  children:
   [ TreeNode { data: 19, children: [Object] },
     TreeNode { data: 5, children: [Object] },
     TreeNode { data: 5, children: [Object] } ] }

 */
