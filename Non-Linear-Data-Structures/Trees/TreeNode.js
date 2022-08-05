class TreeNode {
  constructor(data) {
    this.data = data
    this.children = []
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
};


module.exports = TreeNode;

/*
A tree is composed of tree nodes.
A tree node is a very simple data structure that contains:
1) Data
2) A list of children, where each child is itself a tree node
*/
