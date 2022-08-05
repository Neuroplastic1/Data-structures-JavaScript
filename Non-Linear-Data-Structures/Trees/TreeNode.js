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
  }

  // remove by node or data
  removeChild(childToRemove) {
    // remember the length for recursive case
    const length = this.children.length;
    // filter out targetChild (if found) and update the children array
    this.children = this.children.filter(child => {
      // If target child is an instance of TreeNode
      if (childToRemove instanceof TreeNode) {
        // Compare target child with each child in the children array: basecase 1
        return childToRemove !== child;
      } else {
        // Compare target child with each child's data in the children array: basecase 2
        return child.data !== childToRemove;
      }
    });
    // If target child is not found in the children array (length remaind the same)
    // Recursively call .removeChild() for each grandchild.
    if (length === this.children.length) {
      this.children.forEach(child => child.removeChild(childToRemove));
    }
  }

  print(level = 0) {
    let result = '';
    for (let i = 0; i < level; i++) {
      result += '-- ';
    }
    console.log(`${result}${this.data}`);
    this.children.forEach(child => child.print(level + 1));
  }

};


module.exports = TreeNode;

/*
A tree is composed of tree nodes.
A tree node is a very simple data structure that contains:
1) Data
2) A list of children, where each child is itself a tree node
*/
