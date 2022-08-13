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
console.log('DFS')
tree.depthFirstTraversal()
console.log('BFS')
tree.breadthFirstTraversal()
/* print() logs:
1
-- 17
-- -- 15
-- -- -- 15
-- -- -- 14
-- -- 3
-- -- -- 10
-- -- -- 19
-- 18
-- -- 4
-- -- -- 8
-- -- -- 11
-- -- 17
-- -- -- 4
-- -- -- 13
-- 6
-- -- 7
-- -- -- 16
-- -- -- 5
-- -- 14
-- -- -- 18
-- -- -- 10
DFS
1
17
15
15
14
3
10
19
18
4
8
11
17
4
13
6
7
16
5
14
18
10
BFS
1
17
18
6
15
3
4
17
7
14
15
14
10
19
8
11
4
13
16
5
18
10

 */
